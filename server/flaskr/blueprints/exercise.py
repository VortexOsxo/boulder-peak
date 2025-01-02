from flask import Blueprint, jsonify, g
from ..services import ExerciseService
from .auth import login_required
from flaskr.db import get_db

exercise_bp = Blueprint('exercise', __name__, url_prefix='/exercise')

@exercise_bp.route("/", methods=["GET"])
def get_exercises():
    return jsonify(ExerciseService.get_exercises()), 200

@exercise_bp.route("/<id>", methods=["GET"])
def get_exercise_by_id(id):
    exercise = ExerciseService.get_exercise(id)
    if exercise is None: return jsonify({'error': 'Exercise not found'}), 404
    return jsonify(exercise), 200

@exercise_bp.route("/<id>/logs", methods=["GET"])
@login_required
def get_exercise_logs(id):
    db = get_db()
    workouts_collection = db['workouts']
    workouts = list(workouts_collection.find({'user_id': g.user_id}, {'_id': 0}))
    
    logs = []
    for workout in workouts:
        for exercise in workout['exercises']:
            if exercise['id'] == id:
                logs.append({
                    'date': workout['date'],
                    'sets': exercise['sets']
                })
    return jsonify(logs), 200