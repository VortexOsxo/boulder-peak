from flask import Blueprint, jsonify, g
from ..services import ExerciseService
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
    logs = ExerciseService.get_exercise_logs(g.user_id, id)
    return jsonify(logs), 200

@exercise_bp.route("/<id>/last-target", methods=["GET"])
@login_required
def get_exercise_last_target(id):
    last_target = ExerciseService.get_exercise_last_target(g.user_id, id)
    return jsonify(last_target), 200
