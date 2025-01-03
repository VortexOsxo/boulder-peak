from flask import Blueprint, request, g
from flaskr.db import get_collection

workout_schema_bp = Blueprint('workout_schema', __name__, url_prefix='/workout-schema')
from .auth import login_required


@workout_schema_bp.route("/", methods=["POST"])
@login_required
def log_workout():
    data = request.get_json()
    data['user_id'] = g.user_id
    
    workouts_collection = get_collection('workout-schemas')
    workouts_collection.insert_one(data)

    return "Workout saved", 201

@workout_schema_bp.route("/", methods=["GET"])
@login_required
def get_workjouts():
    workouts_collection = get_collection('workout-schemas')
    workout_schemas = workouts_collection.find({'user_id': g.user_id}, {'_id': 0})

    return list(workout_schemas), 200