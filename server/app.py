from flask import Flask, jsonify
from flask_cors import CORS
from dotenv import load_dotenv
import os

# Load environment variables
load_dotenv()

# Initialize Flask app
app = Flask(__name__)

# Enable CORS
CORS(app)

# App configurations
app.config.from_object("config.Config")

# Default route
@app.route("/")
def home():
    return jsonify({"message": "Welcome to the Turkana Tech Hub API!"})

# Run the application
if __name__ == "__main__":
    app.run(debug=True)
