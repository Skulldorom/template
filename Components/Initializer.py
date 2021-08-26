from models import User, Settings
from app import db
from werkzeug.security import generate_password_hash

""" This is used to initialize the databse and make all the settings for the application """


def check():
    try:
        User.query.first()
        Settings.query.first()
        return True
    except:
        return False


def create():
    print("Initializing")
    if check():
        return False

    print("Databases do not exist, creating...")

    """ Create tables """
    db.create_all()

    """ creating the super admin """
    superU = User(
        "admin",
        "Skull",
        "Dorom",
        "0712345678",
        generate_password_hash("admin", method="sha256"),
    )
    superU.admin = True
    db.session.add(superU)

    """ Creating default settings
        Everything is set to off by default
    """

    complexpass = Settings(
        "Password Complexity", "Requires the password to meet complexity standards"
    )

    db.session.add_all([complexpass])
    db.session.commit()
    return True
