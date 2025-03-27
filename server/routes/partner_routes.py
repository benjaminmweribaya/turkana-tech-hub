from flask import Blueprint, request, jsonify
from models import db, Partner

partner_bp = Blueprint('partner_bp', __name__)

@partner_bp.route('/partners', methods=['GET'])
def get_partners():
    partners = Partner.query.all()
    return jsonify([partner.to_dict() for partner in partners])

@partner_bp.route('/partners/<int:partner_id>', methods=['GET'])
def get_partner(partner_id):
    partner = Partner.query.get_or_404(partner_id)
    return jsonify(partner.to_dict())

@partner_bp.route('/partners', methods=['POST'])
def create_partner():
    data = request.json
    new_partner = Partner(
        name=data['name'],
        description=data.get('description'),
        contact_email=data.get('contact_email'),
        phone_number=data.get('phone_number'),
        website=data.get('website')
    )
    db.session.add(new_partner)
    db.session.commit()
    return jsonify(new_partner.to_dict()), 201

@partner_bp.route('/partners/<int:partner_id>', methods=['PUT'])
def update_partner(partner_id):
    partner = Partner.query.get_or_404(partner_id)
    data = request.json
    partner.name = data.get('name', partner.name)
    partner.description = data.get('description', partner.description)
    partner.contact_email = data.get('contact_email', partner.contact_email)
    partner.phone_number = data.get('phone_number', partner.phone_number)
    partner.website = data.get('website', partner.website)
    db.session.commit()
    return jsonify(partner.to_dict())

@partner_bp.route('/partners/<int:partner_id>', methods=['DELETE'])
def delete_partner(partner_id):
    partner = Partner.query.get_or_404(partner_id)
    db.session.delete(partner)
    db.session.commit()
    return jsonify({'message': 'Partner deleted successfully'})

