from flask import Flask
from flask_cors import CORS
from env import secret_key

def create_app():
    app = Flask(__name__, instance_relative_config=True)
    app.config.from_mapping(SECRET_KEY=secret_key)

    CORS(app, resources={r"/*": {"origins": "*"}}, supports_credentials=True)

    from . import db
    db.init_app(app)

    from .blueprints import auth_bp, training_bp, workout_bp, workout_schema_bp,exercise_bp
    app.register_blueprint(auth_bp)
    app.register_blueprint(training_bp)
    app.register_blueprint(workout_bp)
    app.register_blueprint(workout_schema_bp)
    app.register_blueprint(exercise_bp)

    return app