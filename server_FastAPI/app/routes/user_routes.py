from fastapi import APIRouter

router = APIRouter()

@router.get("/users/test")
async def test_user_route():
	return {"message": "User route is working!"}
