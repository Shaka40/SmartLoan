from contextlib import asynccontextmanager

from fastapi import FastAPI
from app.database.init_db import init_db
from app.api import router as api_router

@asynccontextmanager
async def lifespan(app: FastAPI):
    init_db()
    yield

app = FastAPI(title="SmartLoan Backend", lifespan=lifespan)

app.include_router(api_router, prefix="/api")

@app.get("/")
def root():
    return {"message": "SmartLoan backend is ready"}
