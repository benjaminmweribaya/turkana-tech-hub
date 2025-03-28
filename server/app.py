from flask import Flask, jsonify
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from models import db
from dotenv import load_dotenv
import os

# Import Blueprints
from routes.user_routes import user_bp
from routes.donation_routes import donation_bp
from routes.recipient_routes import recipient_bp
from routes.service_routes import service_bp
from routes.allocation_routes import allocation_bp
from routes.transaction_routes import transaction_bp
from routes.audit_log_routes import audit_log_bp
from routes.admin_routes import admin_bp
from routes.message_routes import message_bp
from routes.partner_routes import partner_bp
from routes.volunteer_routes import volunteer_bp
from routes.activity_routes import activity_bp

# Load environment variables
load_dotenv()

# Initialize Flask app
app = Flask(__name__)
CORS(
    app , 
    resources={r"/*": {"origins": "*"}}, 
    supports_credentials=True, 
    methods=["GET", "POST", "PUT", "DELETE"], 
    headers=["Content-Type", "Authorization"]
)

# Secret Key Configuration
app.config["SECRET_KEY"] = os.getenv("SECRET_KEY", "default_secret_key")

# Database Configuration
DATABASE_URL = os.getenv("DATABASE_URL", "sqlite:///database.db")
app.config["SQLALCHEMY_DATABASE_URI"] = DATABASE_URL
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

# Initialize Database and Migrations
db.init_app(app)
migrate = Migrate(app, db)

# Register Blueprints
app.register_blueprint(user_bp, url_prefix="/api")
app.register_blueprint(donation_bp, url_prefix="/api")
app.register_blueprint(recipient_bp, url_prefix="/api")
app.register_blueprint(service_bp, url_prefix="/api")
app.register_blueprint(allocation_bp, url_prefix="/api")
app.register_blueprint(transaction_bp, url_prefix="/api")
app.register_blueprint(audit_log_bp, url_prefix="/api")
app.register_blueprint(admin_bp, url_prefix="/api")
app.register_blueprint(message_bp, url_prefix="/api")
app.register_blueprint(partner_bp, url_prefix="/api")
app.register_blueprint(volunteer_bp, url_prefix="/api")
app.register_blueprint(activity_bp, url_prefix="/api")

# Define Routes
@app.route("/")
def home():
    return jsonify({"message": "Welcome to the Turkana Tech Hub API!"})

# Run the application
if __name__ == "__main__":
    debug_mode = os.getenv("FLASK_DEBUG", "True").lower() in ["true", "1"]
    app.run(debug=debug_mode)

