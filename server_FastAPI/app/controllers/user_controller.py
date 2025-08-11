import os
from pathlib import Path
from datetime import datetime
import bcrypt
from fastapi import UploadFile, File
from motor.motor_asyncio import AsyncIOMotorDatabase
from app.utils.cloudinary import upload_to_cloudinary
from app.utils.api_response import send_response
from app.helper.common import validate_phone
from app.schemas.user import UserCreate, UserResponse, UserLogin
from app.db import get_db
from app.utils.security import create_access_token, create_refresh_token
from bson import ObjectId
from fastapi.encoders import jsonable_encoder
TEMP_DIR = Path("./public/temp")
TEMP_DIR.mkdir(parents=True, exist_ok=True)


# DB helper functions
async def get_user_by_phone(db: AsyncIOMotorDatabase, phone: str) -> dict:
    return await db["users"].find_one({"phone": phone})

async def create_user(db: AsyncIOMotorDatabase, user_data: dict) -> dict:
    result = await db["users"].insert_one(user_data)
    return await db["users"].find_one({"_id": result.inserted_id})


# Controller: Register User
# Controller: Register User
async def register_user_controller(
    user: UserCreate,
    db: AsyncIOMotorDatabase,
    local_file_path: str = None
):
    if not validate_phone(user.phone):
        return send_response(False, None, "Invalid phone number", 400)

    existing_user = await get_user_by_phone(db, user.phone)
    if existing_user:
        return send_response(False, None, "User already exists", 400)

    hashed_pin = bcrypt.hashpw(user.pin.encode(), bcrypt.gensalt())

    image_url = ""
    if local_file_path:
        image_url = await upload_to_cloudinary(local_file_path)

    user_data = {
        **user.dict(exclude={"pin"}),
        "pin": hashed_pin.decode(),
        "image": image_url,
        "created_at": datetime.utcnow(),
        "updated_at": datetime.utcnow(),
        "token_version": 0,
        "refresh_token": ""
    }

    new_user = await create_user(db, user_data)

    access_token = create_access_token(str(new_user["_id"]), new_user["role"])
    refresh_token = create_refresh_token(
        str(new_user["_id"]),
        new_user["role"],
        new_user.get("token_version", 0)
    )

    await db["users"].update_one(
        {"_id": new_user["_id"]},
        {"$set": {"refresh_token": refresh_token}}
    )
    new_user["_id"] = str(new_user["_id"])
    response_data = jsonable_encoder({
        **new_user,
        "access_token": access_token,
        "refresh_token": refresh_token
    })

    return send_response(True, response_data, "User registered successfully", 201)


# Controller: Login User
async def login_user_controller(credentials: UserLogin, db: AsyncIOMotorDatabase):
    if not validate_phone(credentials.phone):
        return send_response(False, None, "Invalid phone number", 400)

    user = await get_user_by_phone(db, credentials.phone)
    if not user:
        return send_response(False, None, "User not found", 404)

    if not bcrypt.checkpw(credentials.pin.encode(), user["pin"].encode()):
        return send_response(False, None, "Invalid credentials", 401)

    access_token = create_access_token(str(user["_id"]), user["role"])
    refresh_token = create_refresh_token(
        str(user["_id"]),
        user["role"],
        user.get("token_version", 0)
    )

    await db["users"].update_one(
        {"_id": user["_id"]},
        {"$set": {"refresh_token": refresh_token}}
    )

    response_data = UserResponse(
        **user,
        access_token=access_token,
        refresh_token=refresh_token
    ).dict()

    return send_response(True, response_data, "Login successful", 200)
