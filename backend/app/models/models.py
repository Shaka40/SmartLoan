from sqlalchemy import Column, String, Integer, ForeignKey, DateTime, Boolean, Text, Numeric
from sqlalchemy.dialects.postgresql import JSONB
from sqlalchemy.orm import relationship
from datetime import datetime
from app.database.session import Base

class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    email = Column(String(255), unique=True, nullable=False, index=True)
    password_hash = Column(String(255), nullable=False)
    role = Column(String(50), nullable=False)
    full_name = Column(String(255), nullable=True)
    created_at = Column(DateTime, default=datetime.utcnow)
    updated_at = Column(DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)

    applications = relationship("LoanApplication", back_populates="applicant")
    reviews = relationship("ApplicationReview", back_populates="reviewer")
    audit_logs = relationship("AuditLog", back_populates="user")

class LoanApplication(Base):
    __tablename__ = "loan_applications"

    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id"), nullable=False)
    status = Column(String(50), nullable=False, default="draft")

    institution = Column(String(255), nullable=False)
    registration_number = Column(String(128), nullable=False)
    programme = Column(String(255), nullable=False)
    faculty = Column(String(255), nullable=False)
    year_of_study = Column(String(64), nullable=False)
    gpa = Column(String(32), nullable=True)

    parent_guardian_occupation = Column(String(255), nullable=False)
    parent_guardian_employment_status = Column(String(128), nullable=False)
    parent_monthly_income = Column(String(64), nullable=False)
    dependents = Column(Integer, nullable=False)
    total_family_members = Column(Integer, nullable=False)

    orphan_status = Column(String(8), nullable=False)
    rita_death_code = Column(String(128), nullable=True)
    disability_status = Column(String(8), nullable=False)
    disability_description = Column(Text, nullable=True)
    family_house_ownership = Column(String(128), nullable=False)

    sponsorship_type = Column(String(64), nullable=False)
    sponsor_name = Column(String(255), nullable=True)
    sponsorship_amount = Column(String(64), nullable=True)
    previous_loan_received = Column(String(8), nullable=False)
    previous_loan_year = Column(String(128), nullable=True)
    previous_loan_amount = Column(String(64), nullable=True)

    special_circumstances = Column(JSONB, nullable=True)
    submitted_at = Column(DateTime, nullable=True)
    review_started_at = Column(DateTime, nullable=True)
    decision_at = Column(DateTime, nullable=True)

    applicant = relationship("User", back_populates="applications")
    documents = relationship("Document", back_populates="application")
    reviews = relationship("ApplicationReview", back_populates="application")
    audit_logs = relationship("AuditLog", back_populates="application")

class Document(Base):
    __tablename__ = "documents"

    id = Column(Integer, primary_key=True, index=True)
    application_id = Column(Integer, ForeignKey("loan_applications.id"), nullable=False)
    document_type = Column(String(128), nullable=False)
    file_path = Column(String(1024), nullable=False)
    status = Column(String(64), nullable=False, default="pending")
    uploaded_at = Column(DateTime, default=datetime.utcnow)

    application = relationship("LoanApplication", back_populates="documents")

class ApplicationReview(Base):
    __tablename__ = "application_reviews"

    id = Column(Integer, primary_key=True, index=True)
    application_id = Column(Integer, ForeignKey("loan_applications.id"), nullable=False)
    reviewer_id = Column(Integer, ForeignKey("users.id"), nullable=False)
    decision = Column(String(64), nullable=False)
    review_notes = Column(Text, nullable=True)
    ai_recommendation = Column(Text, nullable=True)
    created_at = Column(DateTime, default=datetime.utcnow)

    application = relationship("LoanApplication", back_populates="reviews")
    reviewer = relationship("User", back_populates="reviews")

class AuditLog(Base):
    __tablename__ = "audit_logs"

    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id"), nullable=False)
    application_id = Column(Integer, ForeignKey("loan_applications.id"), nullable=True)
    action = Column(String(255), nullable=False)
    details = Column(Text, nullable=True)
    created_at = Column(DateTime, default=datetime.utcnow)

    user = relationship("User", back_populates="audit_logs")
    application = relationship("LoanApplication", back_populates="audit_logs")
