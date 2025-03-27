from flask import Blueprint, request, jsonify
from models import db, Volunteer

volunteer_bp = Blueprint('volunteer_bp', __name__)

@volunteer_bp.route('/volunteers', methods=['GET'])
def get_volunteers():
    volunteers = Volunteer.query.all()
    return jsonify([volunteer.to_dict() for volunteer in volunteers])

@volunteer_bp.route('/volunteers/<int:volunteer_id>', methods=['GET'])
def get_volunteer(volunteer_id):
    volunteer = Volunteer.query.get_or_404(volunteer_id)
    return jsonify(volunteer.to_dict())

@volunteer_bp.route('/volunteers', methods=['POST'])
def create_volunteer():
    data = request.json
    new_volunteer = Volunteer(
        user_id=data['user_id'],
        skills=data.get('skills'),
        availability=data.get('availability')
    )
    db.session.add(new_volunteer)
    db.session.commit()
    return jsonify(new_volunteer.to_dict()), 201

@volunteer_bp.route('/volunteers/<int:volunteer_id>', methods=['PUT'])
def update_volunteer(volunteer_id):
    volunteer = Volunteer.query.get_or_404(volunteer_id)
    data = request.json
    volunteer.user_id = data.get('user_id', volunteer.user_id)
    volunteer.skills = data.get('skills', volunteer.skills)
    volunteer.availability = data.get('availability', volunteer.availability)
    db.session.commit()
    return jsonify(volunteer.to_dict())

@volunteer_bp.route('/volunteers/<int:volunteer_id>', methods=['DELETE'])
def delete_volunteer(volunteer_id):
    volunteer = Volunteer.query.get_or_404(volunteer_id)
    db.session.delete(volunteer)
    db.session.commit()
    return jsonify({'message': 'Volunteer deleted successfully'})


