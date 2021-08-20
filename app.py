from flask import Flask, Blueprint, session
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from flask_wtf import CSRFProtect
from flask_login import LoginManager

import os
from log import log

db = SQLAlchemy()
login_manager = LoginManager()


def create_app():
    # set the project root directory as the static folder, you can set others.
    app = Flask(__name__,
                static_url_path='',
                static_folder='front/build')

    if app.config['DEBUG']:
        import secret
        os.environ["SECRET_KEY"] = secret.appkey

    app.secret_key = os.environ['SECRET_KEY']

    # your settings.py
    SESSION_PROTECTION = "strong"

    # help prevent XSS.
    SESSION_COOKIE_HTTPONLY = True

    # you will want to set this to False during development.
    # this is due to the lack of SSL during development.
    SESSION_COOKIE_SECURE = True

    csrf = CSRFProtect()
    csrf.WTF_CSRF_TIME_LIMIT = None
    csrf.init_app(app)

    # setting CORS and which Database to use based on whether debug is enabled
    if app.config['DEBUG']:
        import secret
        os.environ["SECRET_KEY"] = secret.appkey
        CORS(app, resources={
             r"/api/*": {"origins": ["http://localhost:3000", "http://127.0.0.1:5000"]}}, supports_credentials=True)
        log("Using CORS").success()
        app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///main.db'
        app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
        log("Using SQL Lite").success()
    else:
        app.secret_key = os.environ['SECRET_KEY']
        app.config['SQLALCHEMY_DATABASE_URI'] = os.environ['DATABASE_URL?sslmode=require'']
        app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
        log("Using Env").success()

    # blueprint for api routes in our app
    from api import api as api_blueprint
    app.register_blueprint(api_blueprint)

    # blueprint for non-auth parts of app
    from main import main as main_blueprint
    app.register_blueprint(main_blueprint)

    db.init_app(app)
    from models import User

    login_manager.init_app(app)

    @login_manager.user_loader
    def load_user(user_id):
        # since the user_id is just the primary key of our user table, use it in the query for the user
        return User.query.get(int(user_id))

    if app.config['DEBUG']:
        print('React app running on http://localhost:5000/')

    return app


if __name__ == '__main__':
    app = create_app()
