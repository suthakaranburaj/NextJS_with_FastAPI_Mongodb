from jose import JWTError, jwt
from datetime import datetime, timedelta
from fastapi import HTTPException, status
from app.config import settings

def create_access_token(user_id: str, role: str) -> str:
    payload = {
        "user_id": user_id,
        "role": role,
        "exp": datetime.utcnow() + timedelta(minutes=15)  # 👈 Use timedelta directly
    }
    return jwt.encode(payload, settings.access_token_secret, algorithm="HS256")

def create_refresh_token(user_id: str, role: str, token_version: int) -> str:
    payload = {
        "user_id": user_id,
        "role": role,
        "token_version": token_version,
        "exp": datetime.utcnow() + timedelta(days=7)
    }
    return jwt.encode(payload, settings.refresh_token_secret, algorithm="HS256")