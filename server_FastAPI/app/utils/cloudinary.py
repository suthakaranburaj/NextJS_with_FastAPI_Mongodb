# app/utils/cloudinary_utils.py
import cloudinary
import cloudinary.uploader
import os
from pathlib import Path
from dotenv import load_dotenv

load_dotenv()
# Configure Cloudinary from environment variables
cloudinary.config(
    cloud_name=os.getenv("CLOUDINARY_CLOUD_NAME"),
    api_key=os.getenv("CLOUDINARY_API_KEY"),
    api_secret=os.getenv("CLOUDINARY_API_SECRET")
)

async def upload_to_cloudinary(local_file_path: str):
    # print(os.getenv("CLOUDINARY_CLOUD_NAME"))
    """Uploads a file to Cloudinary and deletes it locally."""
    try:
        if not local_file_path:
            return None

        response = cloudinary.uploader.upload(
            local_file_path,
            resource_type="auto"
        )

        # Delete the local file
        Path(local_file_path).unlink(missing_ok=True)

        return response
    except Exception as e:
        # Cleanup if file exists
        if local_file_path and Path(local_file_path).exists():
            Path(local_file_path).unlink()
        print(f"Cloudinary Upload Error: {e}")
        raise Exception("Failed to upload file to Cloudinary") from e


async def delete_on_cloudinary(public_id: str):
    """Deletes a file from Cloudinary by its public ID."""
    if not public_id:
        raise Exception("Public ID is missing for deletion")

    try:
        response = cloudinary.uploader.destroy(public_id)

        if response.get("result") not in ["ok", "not found"]:
            raise Exception("Error while deleting the image from Cloudinary")

        return response
    except Exception as e:
        print(f"Cloudinary Deletion Error: {e}")
        raise Exception("Failed to delete image on Cloudinary") from e
