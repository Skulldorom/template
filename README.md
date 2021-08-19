# Flask React MaterialU Template

Flask, React, Materia-lUi template

## Demo

https://skulldorom-react-flask.herokuapp.com/

## Dependancies

- Python
- Node.js
- Degit
- Yarn (Optional)

To install degit:
`npm install degit -g`

To install Yarn
`npm install yarn -g`

## Getting started

```
npx degit Skulldorom/template React-Flask

python -m venv env
env\Scripts\Activate.ps1
pip install -r requirements.txt
```

In another terminal

```
cd front
npm install
```

Then use either

`yarn build` or `npm build`

A secret.py file is required to run the application which will hold all secret keys
it will require the following variable `appkey=""` which will be the secret key for flask.

Once that is done you can start the Flask backend
