from flask import Blueprint, request, jsonify
from models import db, Admin

admin_bp = Blueprint('admin_bp', __name__)

@admin_bp.route('/admins', methods=['GET'])
def get_admins():
    admins = Admin.query.all()
    return jsonify([admin.to_dict() for admin in admins])

@admin_bp.route('/admins/<int:admin_id>', methods=['GET'])
def get_admin(admin_id):
    admin = Admin.query.get_or_404(admin_id)
    return jsonify(admin.to_dict())

@admin_bp.route('/admins', methods=['POST'])
def create_admin():
    data = request.json
    new_admin = Admin(
        user_id=data['user_id'],
        role=data['role']
    )
    db.session.add(new_admin)
    db.session.commit()
    return jsonify(new_admin.to_dict()), 201

@admin_bp.route('/admins/<int:admin_id>', methods=['PUT'])
def update_admin(admin_id):
    admin = Admin.query.get_or_404(admin_id)
    data = request.json
    admin.user_id = data.get('user_id', admin.user_id)
    admin.role = data.get('role', admin.role)
    db.session.commit()
    return jsonify(admin.to_dict())

@admin_bp.route('/admins/<int:admin_id>', methods=['DELETE'])
def delete_admin(admin_id):
    admin = Admin.query.get_or_404(admin_id)
    db.session.delete(admin)
    db.session.commit()
    return jsonify({'message': 'Admin deleted successfully'})
