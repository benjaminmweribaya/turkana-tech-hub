from faker import Faker
from app import app, db
from models import User, Donation, Recipient, Service, Allocation, Transaction, AuditLog, Admin, Message, Partner, Volunteer, Activity
from datetime import datetime, timedelta
import random
from werkzeug.security import generate_password_hash
from decimal import Decimal

fake = Faker()

def seed_database():
    with app.app_context():
        db.drop_all()
        db.create_all()

        # Create Users
        users = []
        for _ in range(5):
            user = User(
                full_name=fake.name(),
                email=fake.email(),
                password_hash=generate_password_hash("password123"),
                role=random.choice(["donor", "admin", "volunteer"]),
                created_at=fake.past_date()
            )
            db.session.add(user)
            users.append(user)
        
        db.session.commit()

        # Create Donations
        donations = []
        for user in users:
            donation = Donation(
                user_id=user.id,
                amount=Decimal(random.uniform(100, 5000)),
                currency="KES",
                payment_method=random.choice(["M-Pesa", "Credit Card", "Bank Transfer"]),
                transaction_id=fake.uuid4(),
                status=random.choice(["pending", "completed", "failed"]),
                created_at=fake.past_date()
            )
            db.session.add(donation)
            donations.append(donation)
        
        db.session.commit()

        # Create Recipients
        recipients = []
        for _ in range(3):
            recipient = Recipient(
                name=fake.company(),
                description=fake.text(),
                contact_email=fake.email(),
                phone_number=fake.phone_number(),
                created_at=fake.past_date()
            )
            db.session.add(recipient)
            recipients.append(recipient)
        
        db.session.commit()

        # Create Services
        services = []
        for _ in range(3):
            service = Service(
                name=fake.job(),
                description=fake.text(),
                created_at=fake.past_date()
            )
            db.session.add(service)
            services.append(service)
        
        db.session.commit()

        # Create Allocations
        for donation in donations:
            allocation = Allocation(
                donation_id=donation.id,
                recipient_id=random.choice(recipients).id,
                service_id=random.choice(services).id,
                allocated_amount=donation.amount * Decimal("0.8"),  
                created_at=fake.past_date()
            )
            db.session.add(allocation)
        
        db.session.commit()

        # Create Transactions
        for donation in donations:
            transaction = Transaction(
                user_id=donation.user_id,
                donation_id=donation.id,
                amount=donation.amount,
                transaction_id=fake.uuid4(),
                payment_provider=random.choice(["M-Pesa", "Stripe", "PayPal"]),
                status=random.choice(["pending", "completed", "failed"]),
                created_at=fake.past_date()
            )
            db.session.add(transaction)
        
        db.session.commit()

        # Create Audit Logs
        for user in users:
            audit_log = AuditLog(
                user_id=user.id,
                action=fake.sentence(),
                description=fake.text(),
                created_at=fake.past_date()
            )
            db.session.add(audit_log)
        
        db.session.commit()

        # Create Admins
        for user in users:
            if user.role == "admin":
                admin = Admin(
                    user_id=user.id,
                    role="superadmin",
                    created_at=fake.past_date()
                )
                db.session.add(admin)
        
        db.session.commit()

        # Create Messages
        for _ in range(5):
            user = random.choice(users) 
            message = Message(
                user_id=user.id,
                full_name=fake.name(),
                email=fake.email(),
                subject=fake.sentence(),
                message=fake.text(),
                status=random.choice(["read", "unread"]),
                created_at=fake.past_date()
            )
            db.session.add(message)
        
        db.session.commit()

        # Create Partners
        for _ in range(3):
            partner = Partner(
                name=fake.company(),
                description=fake.text(),
                contact_email=fake.email(),
                phone_number=fake.phone_number(),
                website=fake.url(),
                created_at=fake.past_date()
            )
            db.session.add(partner)
        
        db.session.commit()

        # Create Volunteers
        volunteers = []
        for user in users:
            if user.role == "volunteer":
                volunteer = Volunteer(
                    user_id=user.id,
                    skills=fake.sentence(),
                    availability=random.choice(["Weekends", "Full-time", "Part-time"]),
                    created_at=fake.past_date()
                )
                db.session.add(volunteer)
                volunteers.append(volunteer)
        
        db.session.commit()

        # Create Activities
        for _ in range(3):
            activity = Activity(
                title=fake.sentence(),
                description=fake.text(),
                date=fake.future_date(),
                location=fake.city(),
                created_at=fake.past_date()
            )
            db.session.add(activity)
        
        db.session.commit()

        print("Database seeding completed successfully!")

if __name__ == "__main__":
    seed_database()
    app.run(debug=True)