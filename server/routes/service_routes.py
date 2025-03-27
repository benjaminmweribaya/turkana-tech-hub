from flask import Blueprint, request, jsonify
from models import db, Service

service_bp = Blueprint('service_bp', __name__)

@service_bp.route('/services', methods=['GET'])
def get_services():
    services = Service.query.all()
    return jsonify([service.to_dict() for service in services])

@service_bp.route('/services/<int:service_id>', methods=['GET'])
def get_service(service_id):
    service = Service.query.get_or_404(service_id)
    return jsonify(service.to_dict())

@service_bp.route('/services', methods=['POST'])
def create_service():
    data = request.json
    new_service = Service(
        name=data['name'],
        description=data.get('description', '')
    )
    db.session.add(new_service)
    db.session.commit()
    return jsonify(new_service.to_dict()), 201

@service_bp.route('/services/<int:service_id>', methods=['PUT'])
def update_service(service_id):
    service = Service.query.get_or_404(service_id)
    data = request.json
    service.name = data.get('name', service.name)
    service.description = data.get('description', service.description)
    db.session.commit()
    return jsonify(service.to_dict())

@service_bp.route('/services/<int:service_id>', methods=['DELETE'])
def delete_service(service_id):
    service = Service.query.get_or_404(service_id)
    db.session.delete(service)
    db.session.commit()
    return jsonify({'message': 'Service deleted successfully'})
