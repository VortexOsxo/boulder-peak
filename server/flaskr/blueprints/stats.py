from flask import Blueprint, jsonify, g
from flaskr.db import get_db

stats_bp = Blueprint('stats', __name__, url_prefix='/stats')
from .auth import login_required

@stats_bp.route("/total-workouts", methods=["GET"])
@login_required
def get_total_workouts():
    db = get_db()
    workouts_collection = db['workouts']

    total_workouts = workouts_collection.count_documents({'user_id': g.user_id})
    return jsonify(total_workouts), 200

@stats_bp.route("/total-volume", methods=["GET"])
@login_required
def get_total_volume():
    db = get_db()
    workouts_collection = db['workouts']
    workouts = list(workouts_collection.find({'user_id': g.user_id}, {'_id': 0}))

    total_volume = 0
    for workout in workouts:
        for exercise in workout['exercises']:
            for set in exercise['sets']:
                total_volume += set['reps'] * set['weight']

    return jsonify(total_volume), 201
