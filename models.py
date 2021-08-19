from flask_sqlalchemy import SQLAlchemy
from app import db
from flask_login import UserMixin


def create_db():
    db.create_all()
    db.session.commit()

# Create our database model


class User(UserMixin, db.Model):
    # primary keys are required by SQLAlchemy
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(100), unique=True)
    password = db.Column(db.String(100))
    fname = db.Column(db.String(50))
    lname = db.Column(db.String(50))
    telephone = db.Column(db.String(10), unique=True)

    def __init__(self, email, fname, lname, tel, password):
        self.email = email
        self.fname = fname
        self.lname = lname
        self.telephone = tel
        self.password = password
