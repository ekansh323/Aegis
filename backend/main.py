from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.api.endpoints import router as api_router
from app.core.config import settings
from app.database.session import engine
from app.database.base import Base
# Import all models to ensure they are registered with Base before creating tables
from app.models import * 

# Create all tables in the engine. This automatically creates the SQLite database file if it doesn't exist
Base.metadata.create_all(bind=engine)

app = FastAPI(
    title=settings.APP_NAME,
    description="Backend API for Aegis - Cybersecurity Investigation Platform",
    version="1.0.0",
    docs_url="/docs",
    redoc_url="/redoc",
)

# CORS configuration
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(api_router, prefix=settings.API_PREFIX)

# Root endpoint directly on main app for convenience, in addition to /api/v1/ 
@app.get("/")
def root():
    return {"message": "Welcome to Aegis API. Go to /docs for API documentation."}

@app.get("/health")
def health():
    return {"status": "ok"}
