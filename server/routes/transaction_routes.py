from flask import Blueprint, request, jsonify
from models import db, Transaction

transaction_bp = Blueprint('transaction_bp', __name__)

@transaction_bp.route('/transactions', methods=['GET'])
def get_transactions():
    transactions = Transaction.query.all()
    return jsonify([transaction.to_dict() for transaction in transactions])

@transaction_bp.route('/transactions/<int:transaction_id>', methods=['GET'])
def get_transaction(transaction_id):
    transaction = Transaction.query.get_or_404(transaction_id)
    return jsonify(transaction.to_dict())

@transaction_bp.route('/transactions', methods=['POST'])
def create_transaction():
    data = request.json
    new_transaction = Transaction(
        user_id=data['user_id'],
        donation_id=data['donation_id'],
        amount=data['amount'],
        transaction_id=data['transaction_id'],
        payment_provider=data['payment_provider'],
        status=data.get('status', 'pending')
    )
    db.session.add(new_transaction)
    db.session.commit()
    return jsonify(new_transaction.to_dict()), 201

@transaction_bp.route('/transactions/<int:transaction_id>', methods=['PUT'])
def update_transaction(transaction_id):
    transaction = Transaction.query.get_or_404(transaction_id)
    data = request.json
    transaction.user_id = data.get('user_id', transaction.user_id)
    transaction.donation_id = data.get('donation_id', transaction.donation_id)
    transaction.amount = data.get('amount', transaction.amount)
    transaction.transaction_id = data.get('transaction_id', transaction.transaction_id)
    transaction.payment_provider = data.get('payment_provider', transaction.payment_provider)
    transaction.status = data.get('status', transaction.status)
    db.session.commit()
    return jsonify(transaction.to_dict())

@transaction_bp.route('/transactions/<int:transaction_id>', methods=['DELETE'])
def delete_transaction(transaction_id):
    transaction = Transaction.query.get_or_404(transaction_id)
    db.session.delete(transaction)
    db.session.commit()
    return jsonify({'message': 'Transaction deleted successfully'})
