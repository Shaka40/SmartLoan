import hashlib
import uuid
from app.database.deps import get_db
from app.models.models import User

def create_admin():
    db = get_db()
    
    # Check if admin exists
    existing = db.query(User).filter(User.role == 'admin').first()
    if existing:
        print(f"✅ Admin already exists: {existing.email}")
        return
    
    # ✅ Use SHA256 (matching your app)
    password = "admin123"
    hashed = hashlib.sha256(password.encode("utf-8")).hexdigest()
    
    admin = User(
        user_id=uuid.uuid4(),
        username="admin_smartloan",
        email="admin@smartloan.com",
        password_hash=hashed,
        role="admin",
        is_active=True
    )
    
    db.add(admin)
    db.commit()
    db.refresh(admin)
    
    print("✅ Admin created with SHA256 hash!")
    print(f"   Email: {admin.email}")
    print(f"   Password: {password}")
    
    db.close()

if __name__ == "__main__":
    create_admin()