from fastapi.responses import JSONResponse
from typing import Any, Optional

def send_response(
    status: str,
    data: Any,
    message: str,
    status_code: int = 200,
    api_version: Optional[str] = None
):
    response_obj = {
        "status": status,
        "data": data,
        "message": message,
        "apiVersion": api_version or "No Version"
    }
    return JSONResponse(content=response_obj, status_code=status_code)
