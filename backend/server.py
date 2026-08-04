from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from typing import Dict
from pydantic import BaseModel, EmailStr, Field, ConfigDict
from typing import List, Dict, Any, Optional
import uuid
from datetime import datetime, timezone


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# Configure logging early
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

# MongoDB connection
mongo_url = os.environ.get('MONGO_URL')
db_name = os.environ.get('DB_NAME')
client: Optional[AsyncIOMotorClient] = None
db = None

if mongo_url and db_name:
    client = AsyncIOMotorClient(mongo_url)
    db = client[db_name]
else:
    logger.warning(
        'Missing MONGO_URL or DB_NAME environment variables. Contact API will not be available.'
    )

# Create the main app without a prefix
app = FastAPI()

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")

from pathlib import Path
from typing import List, Dict, Any, Optional
import uuid
from datetime import datetime, timezone

from pydantic import BaseModel, EmailStr, Field, ConfigDict

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# Configure logging early
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

# MongoDB connection
mongo_url = os.environ.get('MONGO_URL')
db_name = os.environ.get('DB_NAME')
client: Optional[AsyncIOMotorClient] = None
db = None

if mongo_url and db_name:
    client = AsyncIOMotorClient(mongo_url)
    db = client[db_name]
else:
    logger.warning(
        'Missing MONGO_URL or DB_NAME environment variables. Contact API will not be available.'
    )

# Create the main app without a prefix
app = FastAPI()

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")


# Define Models
class StatusCheck(BaseModel):
    model_config = ConfigDict(extra="ignore")  # Ignore MongoDB's _id field
    
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

class StatusCheckCreate(BaseModel):
    client_name: str

class ContactMessage(BaseModel):
    model_config = ConfigDict(extra="ignore")

    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    email: EmailStr
    project: Optional[str] = None
    message: str
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

class ContactMessageCreate(BaseModel):
    name: str
    email: EmailStr
    project: Optional[str] = None
    message: str

# Add your routes to the router instead of directly to app
@api_router.get("/")
async def root() -> Dict[str, str]:
    return {"message": "Portfolio API - Aryaman Singh Dev"}

@api_router.get("/health")
async def health_check() -> Dict[str, str]:
    return {"status": "ok", "service": "contact-api"}

@api_router.post("/contact", response_model=ContactMessage)
async def create_contact_message(input: ContactMessageCreate) -> ContactMessage:
    if db is None:
        logger.error('Database not initialized; cannot save contact message.')
        raise HTTPException(
            status_code=500,
            detail='Database connection unavailable. Please try again later.',
        )

    contact_dict = input.model_dump()
    contact_obj = ContactMessage(**contact_dict)
    
    logger.info("Received contact message: %s", contact_dict)

    # Convert to dict and serialize datetime to ISO string for MongoDB
    doc = contact_obj.model_dump()
    doc['timestamp'] = doc['timestamp'].isoformat()
    
    try:
        result = await db.contact_messages.insert_one(doc)
        logger.info("Inserted contact message with id %s", result.inserted_id)
    except Exception as exc:
        logger.exception('Failed to insert contact message: %s', exc)
        raise HTTPException(
            status_code=500,
            detail='Unable to save message at this time. Please try again later.',
        )

    return contact_obj

@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate) -> StatusCheck:
    status_dict = input.model_dump()
    status_obj = StatusCheck(**status_dict)
    
    # Convert to dict and serialize datetime to ISO string for MongoDB
    doc = status_obj.model_dump()
    doc['timestamp'] = doc['timestamp'].isoformat()
    
    _ = await db.status_checks.insert_one(doc)
    return status_obj

@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks() -> List[StatusCheck]:
    # Exclude MongoDB's _id field from the query results
    status_checks = await db.status_checks.find({}, {"_id": 0}).to_list(1000)
    
    # Convert ISO string timestamps back to datetime objects
    for check in status_checks:
        if isinstance(check['timestamp'], str):
            check['timestamp'] = datetime.fromisoformat(check['timestamp'])
    
    return status_checks

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

@app.on_event("shutdown")
async def shutdown_db_client() -> None:
    if client is not None:
        client.close()