from flask import g
import click
from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi
from env import mongo_username, mongo_password

def get_db():
    if 'db' not in g:
        _create_db()
    return g.db

def get_collection(collection_name):
    db = get_db()
    return db[collection_name]

def _create_db():
    uri = f"mongodb+srv://{mongo_username}:{mongo_password}@cluster0.t8rhv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    client = MongoClient(uri, server_api=ServerApi('1'))
    g.db = client['database']
    
def close_db(e=None):
    db = g.pop('db', None)
    if db is not None:
        db.client.close()

def init_db():
    db = get_db()
    users_collection = db['users']
    users_collection.create_index([("username", 1)], unique=True)

@click.command('init-db')
def init_db_command():
    init_db()
    click.echo('Initialized the database.')

def init_app(app):
    app.teardown_appcontext(close_db)
    app.cli.add_command(init_db_command)