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
git clone https://github.com/srijan-pro2future/pro2futre_assessment.git
cd pro2futre_assessment

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


## 🛠️ Development

### Run Backend Separately

```bash
cd backend
```bash

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
