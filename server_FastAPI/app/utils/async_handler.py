# app/utils/async_handler.py
from functools import wraps

def async_handler(func):
    """A decorator to catch and handle exceptions in async routes."""
    @wraps(func)
    async def wrapper(*args, **kwargs):
        try:
            return await func(*args, **kwargs)
        except Exception as e:
            print(f"Error in {func.__name__}: {str(e)}")
            raise  # Let FastAPI's exception handler take over
    return wrapper
