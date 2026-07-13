from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from uuid import UUID
from app.database.deps import get_db
from app.models.models import LoanApplication
from app.schemas.loan_application import LoanApplicationCreate, LoanApplicationUpdate, LoanApplicationResponse
from app.auth.utils import get_current_user
from app.models.models import User

router = APIRouter(prefix="/loan-applications", tags=["loan-applications"])

@router.post("/", response_model=LoanApplicationResponse)
def create_loan_application(
    payload: LoanApplicationCreate,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    data = payload.dict(exclude_none=True)
    data["user_id"] = current_user.id
    application = LoanApplication(**data)
    db.add(application)
    db.commit()
    db.refresh(application)
    return application

@router.get("/{application_id}", response_model=LoanApplicationResponse)
def get_loan_application(
    application_id: UUID,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    application = db.get(LoanApplication, application_id)
    if not application:
        raise HTTPException(status_code=404, detail="Loan application not found")
    if current_user.role == "student" and application.user_id != current_user.id:
        raise HTTPException(status_code=403, detail="Not authorized to view this application")
    return application

@router.get("/", response_model=list[LoanApplicationResponse])
def list_loan_applications(
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    if current_user.role == "student":
        applications = db.query(LoanApplication).filter(LoanApplication.user_id == current_user.id).all()
    else:
        applications = db.query(LoanApplication).all()
    return applications

@router.put("/{application_id}", response_model=LoanApplicationResponse)
def update_loan_application(
    application_id: UUID,
    payload: LoanApplicationUpdate,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    application = db.get(LoanApplication, application_id)
    if not application:
        raise HTTPException(status_code=404, detail="Loan application not found")
    if current_user.role == "student" and application.user_id != current_user.id:
        raise HTTPException(status_code=403, detail="Not authorized to update this application")
    for field, value in payload.dict(exclude_unset=True).items():
        setattr(application, field, value)
    db.add(application)
    db.commit()
    db.refresh(application)
    return application

@router.delete("/{application_id}")
def delete_loan_application(
    application_id: UUID,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    application = db.get(LoanApplication, application_id)
    if not application:
        raise HTTPException(status_code=404, detail="Loan application not found")
    if current_user.role == "student" and application.user_id != current_user.id:
        raise HTTPException(status_code=403, detail="Not authorized to delete this application")
    db.delete(application)
    db.commit()
    return {"detail": "Loan application deleted"}
