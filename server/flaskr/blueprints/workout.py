from flask import Blueprint, request, g
from flaskr.db import get_db

workout_bp = Blueprint('workout', __name__, url_prefix='/workout')
from .auth import login_required


@workout_bp.route("/", methods=["POST"])
@login_required
def log_workout():
    data = request.get_json()
    data['user_id'] = g.user_id
    
    db = get_db()
    workouts_collection = db['workouts']
    workouts_collection.insert_one(data)

    return "Workout logged", 201

@workout_bp.route("/", methods=["GET"])
@login_required
def get_workjouts():
    db = get_db()
    workouts_collection = db['workouts']
    workouts = workouts_collection.find({'user_id': g.user_id})
    return {"workouts": list(workouts)}, 200