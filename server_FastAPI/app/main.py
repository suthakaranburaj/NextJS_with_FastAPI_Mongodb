from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.db import connect_db
from app.routes import user_routes
from app.config import settings

app = FastAPI()

# CORS Configuration
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include routes
app.include_router(user_routes.router, prefix="/api")

@app.on_event("startup")
async def startup_event():
    await connect_db()

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(
        "main:app",
        host="0.0.0.0",
        port=settings.server_port,
        reload=True
    )