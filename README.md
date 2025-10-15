# Full-Stack Item Management System

A modern full-stack CRUD application demonstrating seamless integration between FastAPI backend and React frontend with Docker containerization.

## 🎯 Project Overview

This project contains a complete full-stack application with:
- **Backend**: Python FastAPI with uv package manager
- **Frontend**: React + TypeScript + Vite
- **Containerization**: Docker & Docker Compose

## 📁 Project Structure

```
Assessment/
├── backend/
│   ├── Dockerfile
│   ├── pyproject.toml         # uv configuration
│   ├── main.py                # FastAPI application
│   └── README.md
├── frontend/
│   ├── Dockerfile
│   ├── package.json           # npm dependencies
│   ├── tsconfig.json          # TypeScript config
│   ├── vite.config.ts         # Vite configuration
│   ├── index.html             # Entry HTML
│   ├── public/
│   │   └── vite.svg
│   └── src/
│       ├── main.tsx           # React entry point
│       ├── App.tsx            # Main component with CRUD UI
│       ├── App.css            # Application styles
│       └── index.css          # Global styles
├── docker-compose.yml
├── .gitignore
└── README.md
```

## 🚀 Quick Start

### Prerequisites

- Docker Desktop installed
- Docker Compose installed

### 1. Clone and Run

```bash
# Clone the repository (if not already)
git clone <repository-url>
cd Assessment

# Build and run with Docker Compose
docker-compose up --build
```

### 2. Access the Application

- **Frontend UI**: http://localhost:5173
- **Backend API**: http://localhost:8000
- **API Documentation (Swagger)**: http://localhost:8000/docs
- **API Documentation (ReDoc)**: http://localhost:8000/redoc

### 3. Stop the Services

```bash
docker-compose down
```

## 🎨 Features

### Frontend (React + TypeScript + Vite)

- **Full CRUD Operations**: Create, Read, Update, and Delete items
- **Modern UI**: Clean, responsive design with gradient backgrounds
- **Modal Forms**: User-friendly forms for creating and editing items
- **Real-time Updates**: Automatic refresh after operations
- **Error Handling**: User-friendly error messages
- **Confirmation Dialogs**: Safe deletion with confirmations
- **Loading States**: Visual feedback during API calls
- **Responsive Design**: Works seamlessly on all screen sizes
- **TypeScript**: Full type safety for robust development
- **Hot Module Replacement**: Instant updates during development

### Backend (FastAPI with uv)

- **RESTful API**: Clean, standards-compliant API design
- **CRUD Operations**: Complete item management
- **Data Validation**: Pydantic models for request/response validation
- **CORS Enabled**: Configured for frontend communication
- **Auto Documentation**: Swagger UI and ReDoc included
- **Fast Package Management**: uv for ultra-fast dependency resolution
- **Hot Reload**: Automatic restart on code changes

## 📡 API Endpoints

### Health & Info
- `GET /` - Welcome message
- `GET /api/health` - Health check endpoint

### Items Management
- `GET /api/items` - Get all items
- `GET /api/items/{item_id}` - Get specific item by ID
- `POST /api/items` - Create new item
- `PUT /api/items/{item_id}` - Update existing item
- `DELETE /api/items/{item_id}` - Delete item

### Request/Response Format

**Item Schema:**
```json
{
  "id": 1,
  "name": "Sample Item",
  "description": "Item description",
  "price": 29.99
}
```

## 🛠️ Development

### Run Backend Separately

```bash
cd backend

# Install uv first if not installed
# Windows: powershell -c "irm https://astral.sh/uv/install.ps1 | iex"
# Linux/Mac: curl -LsSf https://astral.sh/uv/install.sh | sh

# Install dependencies and run
uv sync
uv run uvicorn main:app --reload --host 0.0.0.0 --port 8000
```

### Run Frontend Separately

```bash
cd frontend

# Install dependencies
npm install
# or
pnpm install

# Run development server
npm run dev
# or
pnpm dev
```

## 🌍 Environment Variables

### Backend
- `PYTHONUNBUFFERED=1` - Ensures Python output is logged immediately

### Frontend
- `VITE_API_URL` - Backend API URL (default: `http://localhost:8000`)

To change the API URL, update `docker-compose.yml`:
```yaml
environment:
  - VITE_API_URL=http://your-backend-url
```

## 💻 Technology Stack

### Backend
- **Python 3.12** - Programming language
- **FastAPI** - Modern, fast web framework
- **uv** - Ultra-fast Python package manager
- **Pydantic** - Data validation using Python type annotations
- **Uvicorn** - Lightning-fast ASGI server

### Frontend
- **Vite** - Next generation frontend tooling
- **React 19** - UI library with modern features
- **TypeScript** - Static type checking
- **CSS3** - Custom styling with animations
- **Fetch API** - HTTP client for API calls

### DevOps
- **Docker** - Containerization
- **Docker Compose** - Multi-container orchestration

## 🎯 Application Features Demonstrated

1. **API Integration**: Frontend seamlessly consumes backend REST API
2. **State Management**: React hooks for managing application state
3. **Form Handling**: Controlled components for user input
4. **HTTP Methods**: GET, POST, PUT, DELETE operations
5. **Error Handling**: Graceful error management and user feedback
6. **Loading States**: UX improvements with loading indicators
7. **Responsive Design**: Mobile-first CSS with flexbox and grid
8. **Type Safety**: TypeScript interfaces for data models
9. **Environment Configuration**: Environment-based API URL configuration
10. **Containerization**: Full Docker setup for easy deployment

## 📝 Usage Guide

### Creating an Item
1. Click "➕ Add New Item" button
2. Fill in the name (required), description (optional), and price (required)
3. Click "Create" to save

### Editing an Item
1. Click "✏️ Edit" on any item card
2. Update the fields as needed
3. Click "Update" to save changes

### Deleting an Item
1. Click "🗑️ Delete" on any item card
2. Confirm the deletion in the dialog
3. Item will be removed from the list

### Refreshing the List
- Click "🔄 Refresh" to reload all items from the backend

## 🐛 Troubleshooting

### Backend not accessible
- Ensure Docker containers are running: `docker ps`
- Check backend logs: `docker logs backend-assessment`
- Verify port 8000 is not in use by another application

### Frontend not connecting to backend
- Check VITE_API_URL in docker-compose.yml
- Verify CORS settings in backend/main.py
- Check browser console for error messages

### Hot reload not working
- Ensure volumes are properly mounted in docker-compose.yml
- Try rebuilding containers: `docker-compose up --build`

## 📚 Additional Resources

- [FastAPI Documentation](https://fastapi.tiangolo.com/)
- [React Documentation](https://react.dev/)
- [Vite Documentation](https://vitejs.dev/)
- [uv Documentation](https://docs.astral.sh/uv/)
- [Docker Documentation](https://docs.docker.com/)

## 🤝 Contributing

Feel free to submit issues, create pull requests, or fork the repository to improve the project.

## 📄 License

This project is open source and available for educational purposes.

---

**Made with ❤️ using FastAPI and React**
