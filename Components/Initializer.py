from models import User, Settings
from app import db

""" This is used to initialize the databse and make all the settings for the application """


def check():
    try:
        User.query.first()
        Settings.query.first()
        return True
    except:
        return False


def create():
    if check():
        return False

    """ Create tables """
    db.create_all()

    """ creating the super admin """
    superU = User("admin", "Skull", "Dorom", "0712345678", "admin")
    superU.admin = True
    db.session.add(superU)

    """ Creating default settings
        Everything is set to off by default
    """

    complexpass = Settings(
        "Password Complexity", "Requires the password to meet complexity standards"
    )

    db.session.add_all(complexpass)
    db.session.commit()
