import uuid
from datetime import datetime

from sqlalchemy import Column, String, ForeignKey, DateTime, Boolean, Text, Numeric, Integer, text
from sqlalchemy.dialects.postgresql import JSONB, UUID
from sqlalchemy.orm import relationship, synonym
from app.database.session import Base

class User(Base):
    __tablename__ = "users"

    user_id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4, server_default=text("gen_random_uuid()"), index=True)
    id = synonym("user_id")
    username = Column(String(255), unique=True, nullable=False)
    email = Column(String(255), unique=True, nullable=False, index=True)
    password_hash = Column(String(255), nullable=False)
    role = Column(String(50), nullable=False)
    is_active = Column(Boolean, nullable=True, default=True, server_default=text("true"))
    created_at = Column(DateTime, default=datetime.utcnow, server_default=text("CURRENT_TIMESTAMP"))

    applications = relationship("LoanApplication", back_populates="applicant")
    reviews = relationship("ApplicationReview", back_populates="reviewer")
    audit_logs = relationship("AuditLog", back_populates="user")

class LoanApplication(Base):
    __tablename__ = "loan_applications"

    application_id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4, server_default=text("gen_random_uuid()"), index=True)
    id = synonym("application_id")
    student_id = Column(UUID(as_uuid=True), ForeignKey("users.user_id"), nullable=True)
    user_id = synonym("student_id")
    requested_amount = Column(Numeric, nullable=True)
    status = Column(String(50), nullable=True, default="draft", server_default=text("'draft'::character varying"))
    application_date = Column(DateTime, nullable=True, default=datetime.utcnow, server_default=text("CURRENT_TIMESTAMP"))

    applicant = relationship("User", back_populates="applications")
    documents = relationship("Document", back_populates="application")
    reviews = relationship("ApplicationReview", back_populates="application")
    audit_logs = relationship("AuditLog", back_populates="application")

class Document(Base):
    __tablename__ = "documents"

    document_id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4, server_default=text("gen_random_uuid()"), index=True)
    id = synonym("document_id")
    application_id = Column(UUID(as_uuid=True), ForeignKey("loan_applications.application_id"), nullable=True)
    document_type = Column(String(128), nullable=True)
    file_name = Column(String(255), nullable=True)
    file_path = Column(String(1024), nullable=True)
    file_size = Column(Integer, nullable=True)
    mime_type = Column(String(128), nullable=True)
    status = Column(String(64), nullable=True, default="uploaded", server_default=text("'uploaded'::character varying"))
    upload_date = Column(DateTime, nullable=True, default=datetime.utcnow, server_default=text("CURRENT_TIMESTAMP"))

    application = relationship("LoanApplication", back_populates="documents")

class ApplicationReview(Base):
    __tablename__ = "application_reviews"

    id = Column(Integer, primary_key=True, index=True)
    application_id = Column(UUID(as_uuid=True), ForeignKey("loan_applications.application_id"), nullable=False)
    reviewer_id = Column(UUID(as_uuid=True), ForeignKey("users.user_id"), nullable=False)
    decision = Column(String(64), nullable=False)
    review_notes = Column(Text, nullable=True)
    ai_recommendation = Column(Text, nullable=True)
    created_at = Column(DateTime, default=datetime.utcnow, server_default=text("CURRENT_TIMESTAMP"))

    application = relationship("LoanApplication", back_populates="reviews")
    reviewer = relationship("User", back_populates="reviews")

class AuditLog(Base):
    __tablename__ = "audit_logs"

    log_id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4, server_default=text("gen_random_uuid()"), index=True)
    id = synonym("log_id")
    user_id = Column(UUID(as_uuid=True), ForeignKey("users.user_id"), nullable=True)
    action = Column(String(255), nullable=True)
    description = Column(Text, nullable=True)
    created_at = Column(DateTime, nullable=True, default=datetime.utcnow, server_default=text("CURRENT_TIMESTAMP"))

    user = relationship("User", back_populates="audit_logs")
