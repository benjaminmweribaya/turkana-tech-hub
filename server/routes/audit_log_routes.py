from flask import Blueprint, request, jsonify
from models import db, AuditLog

audit_log_bp = Blueprint('audit_log_bp', __name__)

@audit_log_bp.route('/audit_logs', methods=['GET'])
def get_audit_logs():
    audit_logs = AuditLog.query.all()
    return jsonify([log.to_dict() for log in audit_logs])

@audit_log_bp.route('/audit_logs/<int:audit_log_id>', methods=['GET'])
def get_audit_log(audit_log_id):
    audit_log = AuditLog.query.get_or_404(audit_log_id)
    return jsonify(audit_log.to_dict())

@audit_log_bp.route('/audit_logs', methods=['POST'])
def create_audit_log():
    data = request.json
    new_audit_log = AuditLog(
        user_id=data.get('user_id'),
        action=data['action'],
        description=data['description']
    )
    db.session.add(new_audit_log)
    db.session.commit()
    return jsonify(new_audit_log.to_dict()), 201

@audit_log_bp.route('/audit_logs/<int:audit_log_id>', methods=['DELETE'])
def delete_audit_log(audit_log_id):
    audit_log = AuditLog.query.get_or_404(audit_log_id)
    db.session.delete(audit_log)
    db.session.commit()
    return jsonify({'message': 'Audit log deleted successfully'})

@audit_log_bp.route('/audit_logs/<int:audit_log_id>', methods=['PUT'])
def update_audit_log(audit_log_id):
    audit_log = AuditLog.query.get_or_404(audit_log_id)
    data = request.json
    audit_log.user_id = data.get('user_id', audit_log.user_id)
    audit_log.action = data.get('action', audit_log.action)
    audit_log.description = data.get('description', audit_log.description)
    db.session.commit()
    return jsonify(audit_log.to_dict())