from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List, Optional

app = FastAPI(title="FastAPI Backend", version="1.0.0")

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", "http://frontend:3000", "http://localhost:5173" ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Sample data model
class Item(BaseModel):
    id: Optional[int] = None
    name: str
    description: Optional[str] = None
    price: float

# In-memory database
items_db: List[Item] = [
    Item(id=1, name="Sample Item 1", description="This is a sample item", price=29.99),
    Item(id=2, name="Sample Item 2", description="Another sample item", price=49.99),
]

@app.get("/")
async def root():
    return {"message": "Welcome to FastAPI Backend!"}

@app.get("/api/health")
async def health_check():
    return {"status": "healthy", "service": "FastAPI Backend"}

@app.get("/api/items", response_model=List[Item])
async def get_items():
    return items_db

@app.get("/api/items/{item_id}", response_model=Item)
async def get_item(item_id: int):
    for item in items_db:
        if item.id == item_id:
            return item
    return {"error": "Item not found"}

@app.post("/api/items", response_model=Item)
async def create_item(item: Item):
    item.id = max([i.id for i in items_db], default=0) + 1
    items_db.append(item)
    return item

@app.put("/api/items/{item_id}", response_model=Item)
async def update_item(item_id: int, updated_item: Item):
    for idx, item in enumerate(items_db):
        if item.id == item_id:
            updated_item.id = item_id
            items_db[idx] = updated_item
            return updated_item
    return {"error": "Item not found"}

@app.delete("/api/items/{item_id}")
async def delete_item(item_id: int):
    for idx, item in enumerate(items_db):
        if item.id == item_id:
            items_db.pop(idx)
            return {"message": "Item deleted successfully"}
    return {"error": "Item not found"}
