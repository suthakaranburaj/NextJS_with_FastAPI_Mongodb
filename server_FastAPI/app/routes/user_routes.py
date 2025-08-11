from fastapi import APIRouter, Depends, File, UploadFile, Form
from motor.motor_asyncio import AsyncIOMotorDatabase
from app.middlewares.upload_middleware import upload_middleware
from app.schemas.user import UserCreate, UserLogin
from app.db import get_db
from app.controllers.user_controller import (
    register_user_controller,
    login_user_controller
)

router = APIRouter()

@router.post("/register")
async def register_user_route(
    name: str = Form(...),
    phone: str = Form(...),
    pin: str = Form(...),
    role: str = Form(...),
    image: UploadFile = File(None),
    db: AsyncIOMotorDatabase = Depends(get_db)
):
    # Create Pydantic model manually from form fields
    local_image_path = await upload_middleware(image)
    user = UserCreate(
        name=name,
        phone=phone,
        pin=pin,
        role=role
    )
    return await register_user_controller(user, db, local_image_path)


@router.post("/login")
async def login_user_route(
    phone: str = Form(...),
    pin: str = Form(...),
    db: AsyncIOMotorDatabase = Depends(get_db)
):
    credentials = UserLogin(phone=phone, pin=pin)
    return await login_user_controller(credentials, db)


@router.get("/test")
async def test_user_route():
    return {"message": "User route is working!"}
