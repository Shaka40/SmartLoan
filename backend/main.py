from fastapi import FastAPI
from app.database.init_db import init_db

app = FastAPI(title="SmartLoan Backend")

@app.on_event("startup")
async def startup_event():
    init_db()

@app.get("/")
def root():
    return {"message": "SmartLoan backend is ready"}
