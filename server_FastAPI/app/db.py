
from motor.motor_asyncio import AsyncIOMotorClient, AsyncIOMotorDatabase
from app.config import settings

client: AsyncIOMotorClient = None

async def connect_db():
    global client
    try:
        client = AsyncIOMotorClient(settings.mongodb_url)
        await client.server_info()
        print("✅ MongoDB connected successfully")
    except Exception as e:
        print(f"❌ MongoDB connection failed: {e}")
        raise

def get_db() -> AsyncIOMotorDatabase:
    return client.get_database()