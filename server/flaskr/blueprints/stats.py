from flask import Blueprint, jsonify, g
from flaskr.db import get_collection
from flaskr.services import WorkoutService

stats_bp = Blueprint('stats', __name__, url_prefix='/stats')
from .auth import login_required

@stats_bp.route("/total-workouts", methods=["GET"])
@login_required
def get_total_workouts():
    workouts_collection = get_collection('workouts')

    total_workouts = workouts_collection.count_documents({'user_id': g.user_id})
    return jsonify(total_workouts), 200

@stats_bp.route("/total-volume", methods=["GET"])
@login_required
def get_total_volume():
    workouts = WorkoutService.get_workouts(g.user_id)

    total_volume = 0
    for workout in workouts:
        for exercise in workout['exercises']:
            for set in exercise['sets']:
                total_volume += set['reps'] * set['weight']

    return jsonify(total_volume), 201
