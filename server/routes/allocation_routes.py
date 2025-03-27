from flask import Blueprint, request, jsonify
from models import db, Allocation

allocation_bp = Blueprint('allocation_bp', __name__)

@allocation_bp.route('/allocations', methods=['GET'])
def get_allocations():
    allocations = Allocation.query.all()
    return jsonify([allocation.to_dict() for allocation in allocations])

@allocation_bp.route('/allocations/<int:allocation_id>', methods=['GET'])
def get_allocation(allocation_id):
    allocation = Allocation.query.get_or_404(allocation_id)
    return jsonify(allocation.to_dict())

@allocation_bp.route('/allocations', methods=['POST'])
def create_allocation():
    data = request.json
    new_allocation = Allocation(
        donation_id=data['donation_id'],
        recipient_id=data.get('recipient_id'),
        service_id=data.get('service_id'),
        allocated_amount=data['allocated_amount']
    )
    db.session.add(new_allocation)
    db.session.commit()
    return jsonify(new_allocation.to_dict()), 201

@allocation_bp.route('/allocations/<int:allocation_id>', methods=['PUT'])
def update_allocation(allocation_id):
    allocation = Allocation.query.get_or_404(allocation_id)
    data = request.json
    allocation.donation_id = data.get('donation_id', allocation.donation_id)
    allocation.recipient_id = data.get('recipient_id', allocation.recipient_id)
    allocation.service_id = data.get('service_id', allocation.service_id)
    allocation.allocated_amount = data.get('allocated_amount', allocation.allocated_amount)
    db.session.commit()
    return jsonify(allocation.to_dict())

@allocation_bp.route('/allocations/<int:allocation_id>', methods=['DELETE'])
def delete_allocation(allocation_id):
    allocation = Allocation.query.get_or_404(allocation_id)
    db.session.delete(allocation)
    db.session.commit()
    return jsonify({'message': 'Allocation deleted successfully'})
