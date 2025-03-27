from flask import Flask, jsonify
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from models import db
from dotenv import load_dotenv
import os

# Load environment variables
load_dotenv()

# Initialize Flask app
app = Flask(__name__)
CORS(app)

# Database Configuration
app.config["SQLALCHEMY_DATABASE_URI"] = os.getenv("DATABASE_URL", "sqlite:///database.db")
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

# Initialize Database and Migrations
db.init_app(app)
migrate = Migrate(app, db)

# Define Routes
@app.route("/")
def home():
    return jsonify({"message": "Welcome to the Turkana Tech Hub API!"})

# Run the application
if __name__ == "__main__":
    debug_mode = os.getenv("FLASK_DEBUG", "True").lower() in ["true", "1"]
    app.run(debug=debug_mode)

