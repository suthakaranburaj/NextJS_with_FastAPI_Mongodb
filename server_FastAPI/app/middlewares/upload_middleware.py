# app/middlewares/upload_middleware.py
from fastapi import UploadFile, HTTPException
from pathlib import Path
import shutil
import uuid
import os

TEMP_DIR = Path("./public/temp")
TEMP_DIR.mkdir(parents=True, exist_ok=True)

async def upload_middleware(file: UploadFile | None):
    """
    Saves the uploaded file locally and returns the local file path.
    Works similar to Multer's diskStorage.
    """
    if not file:
        return None

    # Generate unique file name
    extension = Path(file.filename).suffix
    unique_name = f"{uuid.uuid4().hex}{extension}"
    file_path = TEMP_DIR / unique_name

    try:
        with open(file_path, "wb") as buffer:
            shutil.copyfileobj(file.file, buffer)
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"File saving failed: {str(e)}")
    finally:
        file.file.close()

    return str(file_path)
