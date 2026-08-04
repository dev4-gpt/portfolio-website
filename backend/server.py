from fastapi import FastAPI, APIRouter
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from typing import Dict


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Create the main app without a prefix
app = FastAPI()

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")

# Add your routes to the router instead of directly to app
@api_router.get("/")
async def root() -> Dict[str, str]:
    return {"message": "Portfolio API - Aryaman Singh Dev"}

# Include the router in the main app
app.include_router(api_router)

# CORS Configuration - Security: Explicit allowlist instead of wildcard
cors_origins = os.environ.get('CORS_ORIGINS', '').split(',')
# Filter out empty strings and wildcards for security
cors_origins = [origin.strip() for origin in cors_origins if origin.strip() and origin.strip() != '*']

app.add_middleware(
    CORSMiddleware,
    allow_credentials=False,  # Disabled since no authentication is used
    allow_origins=cors_origins if cors_origins else [
        "https://portfolio-website-sage-eight-13.vercel.app",  # Production domain
        "http://localhost:3000"  # Local development
    ],
    allow_methods=["GET", "OPTIONS"],  # Only allow read operations
    allow_headers=["Content-Type"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

@app.on_event("shutdown")
async def shutdown_db_client() -> None:
    client.close()