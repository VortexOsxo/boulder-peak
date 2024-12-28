import os

from flask import Flask
from flask_cors import CORS

def create_app(test_config=None):
    app = Flask(__name__, instance_relative_config=True)
    app.config.from_mapping(
        SECRET_KEY='dev', # TODO: Create a real secret key
        DATABASE=os.path.join(app.instance_path, 'flaskr.sqlite'),
    )

    CORS(app, resources={r"/*": {"origins": "*"}}, supports_credentials=True)

    if test_config is None:
        app.config.from_pyfile('config.py', silent=True)
    else:
        app.config.from_mapping(test_config)

    try:
        os.makedirs(app.instance_path)
    except OSError:
        pass

    from . import db
    db.init_app(app)

    from .blueprints import auth_bp, training_bp, workout_bp
    app.register_blueprint(auth_bp)
    app.register_blueprint(training_bp)
    app.register_blueprint(workout_bp)

    return app