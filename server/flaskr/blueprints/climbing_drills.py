from flask import Blueprint, jsonify
from ..services import ClimbingDrillService

climbing_drill_bp = Blueprint('climbing-drill', __name__, url_prefix='/climbing-drill')

@climbing_drill_bp.route("/random", methods=["GET"])
def get_random_drill():
    return jsonify(ClimbingDrillService.get_random_drill()), 200

