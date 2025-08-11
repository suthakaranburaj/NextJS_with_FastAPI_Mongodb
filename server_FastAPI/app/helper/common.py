import re
import os
import jwt
from datetime import datetime, timedelta


def validate_phone(phone: str) -> bool:
    """
    Validate Indian phone numbers.
    Allows optional +91, 91, or 0 prefix.
    """
    cleaned = re.sub(r"\s|-", "", phone)  # remove spaces and dashes
    pattern = r"^(?:\+91|91|0)?[6-9]\d{9}$"
    return bool(re.match(pattern, cleaned))


def validate_email(email: str) -> bool:
    """
    Validate email addresses.
    """
    pattern = r"^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
    return bool(re.match(pattern, email))


def create_token(_id: str) -> str:
    """
    Create a JWT token with expiry from environment variables.
    """
    jwt_key = os.getenv("ACCESS_TOKEN_SECRET", "default_secret")
    expiry_minutes = int(os.getenv("ACCESS_TOKEN_EXPIRY", "60"))

    payload = {
        "_id": _id,
        "exp": datetime.utcnow() + timedelta(minutes=expiry_minutes)
    }

    return jwt.encode(payload, jwt_key, algorithm="HS256")
