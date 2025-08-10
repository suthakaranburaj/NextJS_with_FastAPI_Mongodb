from pymongo import IndexModel
from .base import PyObjectId
from datetime import datetime

class User:
    collection = "users"

    @staticmethod
    def schema():
        return {
            "name": {"type": "string", "required": True, "minlength": 2},
            "phone": {"type": "string", "required": True},
            "pin": {"type": "string", "required": True, "minlength": 4},
            "role": {
                "type": "string",
                "required": True,
                "allowed": ["vendor", "normal_user", "supplier", "agent"]
            },
            "refresh_token": {"type": "string", "default": ""},
            "token_version": {"type": "integer", "default": 0},
            "image": {"type": "string", "default": ""},
            "created_at": {"type": "datetime", "default": datetime.utcnow},
            "updated_at": {"type": "datetime", "default": datetime.utcnow}
        }

    @staticmethod
    def indexes():
        return [
            IndexModel("phone", unique=True),
            IndexModel("created_at"),
        ]