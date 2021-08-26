import re


def email(email):
    # Make a regular expression
    # for validating an Email
    regex = r"\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b"

    if re.fullmatch(regex, email):
        return True
    else:
        return False


def password(password):
    valid = True
    message = ""
    if len(password) < 8:
        message += "Password length needs to be greater than 8 characters.\n"
        valid = False
    if not re.search("[a-z]", password):
        message += "You need at least one lower case character.\n"
        valid = False
    if not re.search("[A-Z]", password):
        message += "You need at least one upper case character.\n"
        valid = False
    if not re.search("[0-9]", password):
        message += "You need at least number.\n"
        valid = False
    if not re.search("[^A-Za-z0-9]", password):
        message += "You need at least one special character.\n"
        valid = False
    if re.search("\s", password):
        message += "Please do not add any spaces.\n"
        valid = False

    return valid, message
