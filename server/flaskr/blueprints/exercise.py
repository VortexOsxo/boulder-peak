from flask import Blueprint, jsonify, g
from ..services import ExerciseService, WorkoutService
from .auth import login_required

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
    workouts = WorkoutService.get_workouts(g.user_id)
    
    logs = []
    for workout in workouts:
        for exercise in workout['exercises']:
            if exercise['id'] == id:
                logs.append({
                    'date': workout['date'],
                    'sets': exercise['sets']
                })
    return jsonify(logs), 200