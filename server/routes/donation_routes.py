from flask import Blueprint, request, jsonify
from models import db, Donation

donation_bp = Blueprint('donation_bp', __name__)

@donation_bp.route('/donations', methods=['GET'])
def get_donations():
    donations = Donation.query.all()
    return jsonify([donation.to_dict() for donation in donations])

@donation_bp.route('/donations/<int:donation_id>', methods=['GET'])
def get_donation(donation_id):
    donation = Donation.query.get_or_404(donation_id)
    return jsonify(donation.to_dict())

@donation_bp.route('/donations', methods=['POST'])
def create_donation():
    data = request.json
    new_donation = Donation(
        user_id=data['user_id'],
        amount=data['amount'],
        currency=data.get('currency', 'KES'),
        payment_method=data['payment_method'],
        transaction_id=data['transaction_id'],
        status=data.get('status', 'pending')
    )
    db.session.add(new_donation)
    db.session.commit()
    return jsonify(new_donation.to_dict()), 201

@donation_bp.route('/donations/<int:donation_id>', methods=['PUT'])
def update_donation(donation_id):
    donation = Donation.query.get_or_404(donation_id)
    data = request.json
    donation.amount = data.get('amount', donation.amount)
    donation.currency = data.get('currency', donation.currency)
    donation.payment_method = data.get('payment_method', donation.payment_method)
    donation.status = data.get('status', donation.status)
    db.session.commit()
    return jsonify(donation.to_dict())

@donation_bp.route('/donations/<int:donation_id>', methods=['DELETE'])
def delete_donation(donation_id):
    donation = Donation.query.get_or_404(donation_id)
    db.session.delete(donation)
    db.session.commit()
    return jsonify({'message': 'Donation deleted successfully'})
