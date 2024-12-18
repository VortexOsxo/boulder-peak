import functools
import jwt
from flask import Blueprint, g, request, jsonify, current_app
from werkzeug.security import check_password_hash, generate_password_hash
from datetime import datetime, timedelta
from flaskr.db import get_db

auth_bp = Blueprint('auth', __name__, url_prefix='/auth')

@auth_bp.before_app_request
def load_logged_in_user():
    token = None
    g.user_id = None

    if 'Authorization' in request.headers:
        token = request.headers['Authorization'].split(" ")[1] 
        
    if not token: return

    try:
        data = jwt.decode(token, current_app.config['SECRET_KEY'], algorithms=["HS256"])
    except jwt.ExpiredSignatureError:
        return

    g.user_id = data['user_id']

@auth_bp.route('/signup', methods=('GET', 'POST')) # TODO : change for post 
def signup():
    data = request.get_json()

    username = data.get('username')
    password = data.get('password')

    db = get_db()

    try:
        db.execute(
            'INSERT INTO user (username, password) VALUES (?, ?)',
            (username, generate_password_hash(password)),
        )
        db.commit()
    except db.IntegrityError:
        return f'User {username} is already registered', 400 
    return f'Account created for {username}', 201

@auth_bp.route('/login', methods=('GET', 'POST')) # TODO : change for post
def login():
    data = request.get_json()

    username = data.get('username')
    password = data.get('password')

    db = get_db()
    user = db.execute(
        'SELECT * FROM user WHERE username = ?', (username,)
    ).fetchone()

    if user is None:
        return jsonify({'error': 'Incorrect username'}), 401
    elif not check_password_hash(user[2], password):
        return jsonify({'error': 'Incorrect password'}), 401
    
    token = jwt.encode({
        'user_id': user[0],
        'exp': datetime.utcnow() + timedelta(hours=3)
    }, current_app.config['SECRET_KEY'], algorithm='HS256')

    return jsonify({'token': token}), 200

def login_required(view):
    @functools.wraps(view)
    def wrapped_view(**kwargs):
        if request.method != "OPTIONS" and g.user_id is None:
            return f'Must be logged in', 203

        return view(**kwargs)

    return wrapped_view