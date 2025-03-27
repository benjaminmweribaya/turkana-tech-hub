from flask_sqlalchemy import SQLAlchemy
from datetime import datetime

db = SQLAlchemy()

class User(db.Model):
    __tablename__ = 'users'
    
    id = db.Column(db.Integer, primary_key=True)
    full_name = db.Column(db.String(255), nullable=False)
    email = db.Column(db.String(255), unique=True, nullable=False)
    password_hash = db.Column(db.Text, nullable=False)
    role = db.Column(db.String(50), default='donor', nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)

    donations = db.relationship('Donation', back_populates='user', cascade='all, delete')
    transactions = db.relationship('Transaction', back_populates='user', cascade='all, delete')
    audit_logs = db.relationship('AuditLog', back_populates='user', cascade='all, delete')
    messages = db.relationship('Message', back_populates='user', cascade='all, delete')
    volunteer = db.relationship('Volunteer', uselist=False, back_populates='user', cascade='all, delete')
    admin = db.relationship('Admin', uselist=False, back_populates='user', cascade='all, delete')

    def to_dict(self):
        return {
            "id": self.id, 
            "full_name": self.full_name, 
            "email": self.email, 
            "role": self.role, 
            "created_at": self.created_at
        }

class Donation(db.Model):
    __tablename__ = 'donations'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id', ondelete='CASCADE'), nullable=False)
    amount = db.Column(db.Numeric(10,2), nullable=False)
    currency = db.Column(db.String(10), default='KES', nullable=False)
    payment_method = db.Column(db.String(50), nullable=False)
    transaction_id = db.Column(db.String(255), unique=True, nullable=False)
    status = db.Column(db.String(50), default='pending', nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)

    user = db.relationship('User', back_populates='donations')
    allocations = db.relationship('Allocation', back_populates='donation', cascade='all, delete')
    transactions = db.relationship('Transaction', back_populates='donation', cascade='all, delete')
    
    def to_dict(self):
        return {
            "id": self.id, 
            "user_id": self.user_id, 
            "amount": str(self.amount), 
            "currency": self.currency, 
            "status": self.status, 
            "created_at": self.created_at
        }
    
class Recipient(db.Model):
    __tablename__ = 'recipients'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(255), nullable=False)
    description = db.Column(db.Text)
    contact_email = db.Column(db.String(255), unique=True)
    phone_number = db.Column(db.String(20))
    created_at = db.Column(db.DateTime, default=datetime.utcnow)

    allocations = db.relationship('Allocation', back_populates='recipient', lazy=True)

    def to_dict(self):
        return {
            "id": self.id, 
            "name": self.name, 
            "description": self.description, 
            "contact_email": self.contact_email, 
            "phone_number": self.phone_number, 
            "created_at": self.created_at
        }

class Service(db.Model):
    __tablename__ = 'services'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(255), nullable=False)
    description = db.Column(db.Text)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)

    allocations = db.relationship('Allocation', back_populates='service', lazy=True)

    def to_dict(self):
        return {
            "id": self.id, 
            "name": self.name, 
            "description": self.description, 
            "created_at": self.created_at
        }

class Allocation(db.Model):
    __tablename__ = 'allocations'

    id = db.Column(db.Integer, primary_key=True)
    donation_id = db.Column(db.Integer, db.ForeignKey('donations.id', ondelete='CASCADE'), nullable=False)
    recipient_id = db.Column(db.Integer, db.ForeignKey('recipients.id', ondelete='SET NULL'))
    service_id = db.Column(db.Integer, db.ForeignKey('services.id', ondelete='SET NULL'))
    allocated_amount = db.Column(db.Numeric(10, 2), nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)

    donation = db.relationship('Donation', back_populates='allocations')
    recipient = db.relationship('Recipient', back_populates='allocations')
    service = db.relationship('Service', back_populates='allocations')

    def to_dict(self):
        return {
            "id": self.id, 
            "donation_id": self.donation_id, 
            "recipient_id": self.recipient_id, 
            "service_id": self.service_id, 
            "allocated_amount": str(self.allocated_amount), 
            "created_at": self.created_at
        }

class Transaction(db.Model):
    __tablename__ = 'transactions'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id', ondelete='CASCADE'), nullable=False)
    donation_id = db.Column(db.Integer, db.ForeignKey('donations.id', ondelete='CASCADE'), nullable=False)
    amount = db.Column(db.Numeric(10,2), nullable=False)
    transaction_id = db.Column(db.String(255), unique=True, nullable=False)
    payment_provider = db.Column(db.String(50), nullable=False)
    status = db.Column(db.String(50), default='pending', nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)

    user = db.relationship('User', back_populates='transactions')
    donation = db.relationship('Donation', back_populates='transactions')

    def to_dict(self):
        return {
            "id": self.id, 
            "user_id": self.user_id, 
            "donation_id": self.donation_id, 
            "amount": str(self.amount), 
            "status": self.status, 
            "created_at": self.created_at
        }

class AuditLog(db.Model):
    __tablename__ = 'audit_logs'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id', ondelete='SET NULL'))
    action = db.Column(db.String(255), nullable=False)
    description = db.Column(db.Text, nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)

    user = db.relationship('User', back_populates='audit_logs')

    def to_dict(self):
        return {
            "id": self.id, 
            "user_id": self.user_id,
            "action": self.action, 
            "description": self.description, 
            "created_at": self.created_at
        }

class Admin(db.Model):
    __tablename__ = 'admins'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id', ondelete='CASCADE'), nullable=False)
    role = db.Column(db.String(50), nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)

    user = db.relationship('User', back_populates='admin')

    def to_dict(self):
        return {
            "id": self.id, 
            "user_id": self.user_id, 
            "role": self.role, 
            "created_at": self.created_at
        }

class Message(db.Model):
    __tablename__ = 'messages'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id', ondelete='CASCADE'), nullable=False)
    full_name = db.Column(db.String(255), nullable=False)
    email = db.Column(db.String(255), nullable=False)
    subject = db.Column(db.String(255), nullable=False)
    message = db.Column(db.Text, nullable=False)
    status = db.Column(db.String(50), default='unread', nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)

    user = db.relationship('User', back_populates='messages')

    def to_dict(self):
        return {
            "id": self.id, 
            "full_name": self.full_name, 
            "email": self.email, 
            "subject": self.subject, 
            "message": self.message, 
            "status": self.status, 
            "created_at": self.created_at
        }

class Partner(db.Model):
    __tablename__ = 'partners'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(255), nullable=False)
    description = db.Column(db.Text)
    contact_email = db.Column(db.String(255), unique=True)
    phone_number = db.Column(db.String(20))
    website = db.Column(db.String(255))
    created_at = db.Column(db.DateTime, default=datetime.utcnow)

    def to_dict(self):
        return {
            "id": self.id, 
            "name": self.name, 
            "description": self.description, 
            "contact_email": self.contact_email, 
            "phone_number": self.phone_number, 
            "website": self.website, 
            "created_at": self.created_at
        }

# Association table for many-to-many relationship between Volunteer and Activity
volunteer_activity = db.Table(
    'volunteer_activity',
    db.Column('volunteer_id', db.Integer, db.ForeignKey('volunteers.id', ondelete='CASCADE'), primary_key=True),
    db.Column('activity_id', db.Integer, db.ForeignKey('activities.id', ondelete='CASCADE'), primary_key=True)
)


class Volunteer(db.Model):
    __tablename__ = 'volunteers'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id', ondelete='CASCADE'), nullable=False)
    skills = db.Column(db.Text)
    availability = db.Column(db.String(100))
    created_at = db.Column(db.DateTime, default=datetime.utcnow)

    user = db.relationship('User', back_populates='volunteer')
    activity = db.relationship('Activity', secondary=volunteer_activity, back_populates='volunteers')

    def to_dict(self):
        return {
            "id": self.id, 
            "user_id": self.user_id, 
            "skills": self.skills, 
            "availability": self.availability, 
            "created_at": self.created_at
        }

class Activity(db.Model):
    __tablename__ = 'activities'

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(255), nullable=False)
    description = db.Column(db.Text)
    date = db.Column(db.DateTime, nullable=False)
    location = db.Column(db.String(255))
    created_at = db.Column(db.DateTime, default=datetime.utcnow)

    volunteers = db.relationship('Volunteer', secondary=volunteer_activity, back_populates='activity', lazy=True)

    def to_dict(self):
        return {
            "id": self.id, 
            "title": self.title, 
            "description": self.description, 
            "date": self.date, 
            "location": self.location, 
            "created_at": self.created_at
        }