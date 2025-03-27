from flask import Blueprint, request, jsonify
from models import db, Recipient

recipient_bp = Blueprint('recipient_bp', __name__)

@recipient_bp.route('/recipients', methods=['GET'])
def get_recipients():
    recipients = Recipient.query.all()
    return jsonify([recipient.to_dict() for recipient in recipients])

@recipient_bp.route('/recipients/<int:recipient_id>', methods=['GET'])
def get_recipient(recipient_id):
    recipient = Recipient.query.get_or_404(recipient_id)
    return jsonify(recipient.to_dict())

@recipient_bp.route('/recipients', methods=['POST'])
def create_recipient():
    data = request.json
    new_recipient = Recipient(
        name=data['name'],
        description=data.get('description', ''),
        contact_email=data.get('contact_email', None),
        phone_number=data.get('phone_number', None)
    )
    db.session.add(new_recipient)
    db.session.commit()
    return jsonify(new_recipient.to_dict()), 201

@recipient_bp.route('/recipients/<int:recipient_id>', methods=['PUT'])
def update_recipient(recipient_id):
    recipient = Recipient.query.get_or_404(recipient_id)
    data = request.json
    recipient.name = data.get('name', recipient.name)
    recipient.description = data.get('description', recipient.description)
    recipient.contact_email = data.get('contact_email', recipient.contact_email)
    recipient.phone_number = data.get('phone_number', recipient.phone_number)
    db.session.commit()
    return jsonify(recipient.to_dict())

@recipient_bp.route('/recipients/<int:recipient_id>', methods=['DELETE'])
def delete_recipient(recipient_id):
    recipient = Recipient.query.get_or_404(recipient_id)
    db.session.delete(recipient)
    db.session.commit()
    return jsonify({'message': 'Recipient deleted successfully'})
