# save this as app.py
from flask import Flask, jsonify


app = Flask(__name__)


@app.route("/")
def hello():
    return jsonify({"message": "Hello, World!"})


# Shell commands
# Run the app
#   flask --app app run --debug
#
