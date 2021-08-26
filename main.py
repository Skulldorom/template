from flask import Blueprint, Flask, request, jsonify, request
from flask_login import login_required, current_user

app = Flask(__name__, static_url_path="", static_folder="front/build")
main = Blueprint("main", __name__)


@main.route("/")
def root():
    return app.send_static_file("index.html")
