from .session import engine, Base
from ..models.models import User, LoanApplication, Document, ApplicationReview, AuditLog


def init_db():
    Base.metadata.create_all(bind=engine)
