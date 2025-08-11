# app/routes/user.route.py
from fastapi import APIRouter, Depends, File, UploadFile
from motor.motor_asyncio import AsyncIOMotorDatabase

from app.schemas.user import UserCreate, UserLogin, UserResponse
from app.utils.api_response import ApiResponse
from app.db import get_db
from app.controllers.user.controller import (
    register_user_controller,
    login_user_controller
)

router = APIRouter()

@router.post("/register", response_model=ApiResponse[UserResponse])
async def register_user_route(
    user: UserCreate,
    db: AsyncIOMotorDatabase = Depends(get_db),
    image: UploadFile = File(None)
):
    return await register_user_controller(user, db, image)

@router.post("/login", response_model=ApiResponse[UserResponse])
async def login_user_route(
    credentials: UserLogin,
    db: AsyncIOMotorDatabase = Depends(get_db)
):
    return await login_user_controller(credentials, db)


@router.get("/test")
async def test_user_route():
    return {"message": "User route is working!"}
