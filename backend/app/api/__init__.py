from fastapi import APIRouter
from app.api.loan_applications import router as loan_applications_router
from app.api.auth import router as auth_router

router = APIRouter()
router.include_router(auth_router)
router.include_router(loan_applications_router)
