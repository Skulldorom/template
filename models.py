from flask_sqlalchemy import SQLAlchemy
from app import db
from flask_login import UserMixin

# Create our database model


class User(UserMixin, db.Model):
    # primary keys are required by SQLAlchemy
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(100), unique=True)
    password = db.Column(db.String(100))
    fname = db.Column(db.String(50))
    lname = db.Column(db.String(50))
    telephone = db.Column(db.String(10), unique=True)
    admin = db.Column(db.Boolean)

    # I will have to add roles that can be used to limit access

    def __init__(self, email, fname, lname, tel, password):
        self.email = email
        self.fname = fname
        self.lname = lname
        self.telephone = tel
        self.password = password
        self.admin = False


""" This will store application settings, that can be toggled """


class Settings(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), unique=True)
    description = db.Column(db.String(1000))
    on = db.Column(db.Boolean)

    def __init__(self, name, description):
        self.name = name
        self.description = description
        self.on = False

    def toggle(self):
        self.on = not self.on
