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
    id: str = Field(..., alias="_id")
    image: Optional[str] = None
    created_at: datetime
    updated_at: datetime

    class Config:
        allow_population_by_field_name = True

class UserLogin(BaseModel):
    phone: str
    pin: str = Field(..., min_length=4)