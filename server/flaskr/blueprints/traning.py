from flask import Blueprint

training_bp = Blueprint('training', __name__, url_prefix='/training')
from .auth import login_required


@training_bp.route("/", methods=["GET"])
@login_required
def training():
    return "Training data fetched successfully!"
