from flask import Blueprint, jsonify
from ..services import ExerciseService

exercise_bp = Blueprint('exercise', __name__, url_prefix='/exercise')

@exercise_bp.route("/", methods=["GET"])
def get_exercises():
    return jsonify(ExerciseService.get_exercises()), 200

@exercise_bp.route("/<id>", methods=["GET"])
def get_exercise_by_id(id):
    exercise = ExerciseService.get_execise_by_id(id)
    if exercise is None: return jsonify({'error': 'Exercise not found'}), 404
    return jsonify(exercise), 200