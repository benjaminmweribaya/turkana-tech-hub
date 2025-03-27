from flask import Blueprint, request, jsonify
from models import db, Message

message_bp = Blueprint('message_bp', __name__)

@message_bp.route('/messages', methods=['GET'])
def get_messages():
    messages = Message.query.all()
    return jsonify([message.to_dict() for message in messages])

@message_bp.route('/messages/<int:message_id>', methods=['GET'])
def get_message(message_id):
    message = Message.query.get_or_404(message_id)
    return jsonify(message.to_dict())

@message_bp.route('/messages', methods=['POST'])
def create_message():
    data = request.json
    new_message = Message(
        full_name=data['full_name'],
        email=data['email'],
        subject=data['subject'],
        message=data['message'],
        status=data.get('status', 'unread')
    )
    db.session.add(new_message)
    db.session.commit()
    return jsonify(new_message.to_dict()), 201

@message_bp.route('/messages/<int:message_id>', methods=['PUT'])
def update_message(message_id):
    message = Message.query.get_or_404(message_id)
    data = request.json
    message.full_name = data.get('full_name', message.full_name)
    message.email = data.get('email', message.email)
    message.subject = data.get('subject', message.subject)
    message.message = data.get('message', message.message)
    message.status = data.get('status', message.status)
    db.session.commit()
    return jsonify(message.to_dict())

@message_bp.route('/messages/<int:message_id>', methods=['DELETE'])
def delete_message(message_id):
    message = Message.query.get_or_404(message_id)
    db.session.delete(message)
    db.session.commit()
    return jsonify({'message': 'Message deleted successfully'})

