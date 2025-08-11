from pydantic import BaseModel, Field
from typing import Optional
from datetime import datetime

class UserBase(BaseModel):
    name: str
    phone: str
    role: str

class UserCreate(UserBase):
    pin: str = Field(..., min_length=4)

class UserResponse(UserBase):
    any


class UserLogin(BaseModel):
    phone: str
    pin: str = Field(..., min_length=4)