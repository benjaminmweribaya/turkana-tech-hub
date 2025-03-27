from flask import Blueprint, request, jsonify
from models import db, Activity

activity_bp = Blueprint('activity_bp', __name__)

@activity_bp.route('/activities', methods=['GET'])
def get_activities():
    activities = Activity.query.all()
    return jsonify([activity.to_dict() for activity in activities])

@activity_bp.route('/activities/<int:activity_id>', methods=['GET'])
def get_activity(activity_id):
    activity = Activity.query.get_or_404(activity_id)
    return jsonify(activity.to_dict())

@activity_bp.route('/activities', methods=['POST'])
def create_activity():
    data = request.json
    new_activity = Activity(
        title=data['title'],
        description=data.get('description'),
        date=data['date'],
        location=data.get('location')
    )
    db.session.add(new_activity)
    db.session.commit()
    return jsonify(new_activity.to_dict()), 201

@activity_bp.route('/activities/<int:activity_id>', methods=['PUT'])
def update_activity(activity_id):
    activity = Activity.query.get_or_404(activity_id)
    data = request.json
    activity.title = data.get('title', activity.title)
    activity.description = data.get('description', activity.description)
    activity.date = data.get('date', activity.date)
    activity.location = data.get('location', activity.location)
    db.session.commit()
    return jsonify(activity.to_dict())

@activity_bp.route('/activities/<int:activity_id>', methods=['DELETE'])
def delete_activity(activity_id):
    activity = Activity.query.get_or_404(activity_id)
    db.session.delete(activity)
    db.session.commit()
    return jsonify({'message': 'Activity deleted successfully'})

