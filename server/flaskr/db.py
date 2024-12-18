import sqlite3
from flask import current_app, g
import click

def get_db():
    if 'db' not in g:
        _create_db()

    return g.db

def _create_db():
    g.db = sqlite3.connect(current_app.config['DATABASE'])

def close_db(e=None):
    db = g.pop('db', None)

    if db is not None:
        db.close()

def init_db():
    db = get_db()

    with current_app.open_resource('schema.sql') as f:
        db.executescript(f.read().decode('utf8'))


@click.command('init-db')
def init_db_command():
    init_db()
    click.echo('Initialized the database.')

def init_app(app):
    app.teardown_appcontext(close_db)
    app.cli.add_command(init_db_command)