from flask import Blueprint, request, g
from flaskr.db import get_collection

workout_bp = Blueprint('workout', __name__, url_prefix='/workout')
from .auth import login_required

@workout_bp.route("/", methods=["POST"])
@login_required
def log_workout():
    data = request.get_json()
    data['user_id'] = g.user_id
    
    workouts_collection = get_collection('workouts')
    workouts_collection.insert_one(data)

    return "Workout logged", 201

@workout_bp.route("/", methods=["GET"])
@login_required
def get_workouts():
    sorts = {'date': -1, 'duration': -1}
    sort = request.args.get('sort')
    if sort not in sorts: sort = 'date'

    workouts_collection = get_collection('workouts')
    workouts = workouts_collection.find({'user_id': g.user_id}, {'_id': 0}).sort(sort, sorts[sort])

    return list(workouts), 200