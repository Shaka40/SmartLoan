from pydantic import BaseModel, Field
from typing import Optional, List, Dict

class LoanApplicationBase(BaseModel):
    institution: str
    registration_number: str
    programme: str
    faculty: str
    year_of_study: str
    gpa: Optional[str]
    parent_guardian_occupation: str
    parent_guardian_employment_status: str
    parent_monthly_income: str
    dependents: int
    total_family_members: int
    orphan_status: str
    rita_death_code: Optional[str] = None
    disability_status: str
    disability_description: Optional[str] = None
    family_house_ownership: str
    sponsorship_type: str
    sponsor_name: Optional[str] = None
    sponsorship_amount: Optional[str] = None
    previous_loan_received: str
    previous_loan_year: Optional[str] = None
    previous_loan_amount: Optional[str] = None
    special_circumstances: Optional[Dict[str, Optional[str]]] = None

class LoanApplicationCreate(LoanApplicationBase):
    user_id: Optional[int] = None

class LoanApplicationUpdate(LoanApplicationBase):
    status: Optional[str] = None

class LoanApplicationResponse(LoanApplicationBase):
    id: int
    user_id: int
    status: str
    submitted_at: Optional[str] = None
    review_started_at: Optional[str] = None
    decision_at: Optional[str] = None

    class Config:
        from_attributes = True
