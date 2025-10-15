# FastAPI Backend with uv

This backend uses [FastAPI](https://fastapi.tiangolo.com/) with [uv](https://docs.astral.sh/uv/) for fast package management.

## Features

- FastAPI for modern API development
- uv for ultra-fast package installation and management
- Automatic API documentation (Swagger UI)
- CORS enabled for frontend communication
- Hot reload in development mode

## Setup with uv

### Install uv (if not using Docker)

```bash
# On Windows
powershell -c "irm https://astral.sh/uv/install.ps1 | iex"

# On macOS/Linux
curl -LsSf https://astral.sh/uv/install.sh | sh
```

### Install dependencies

```bash
uv sync
```

### Run the application

```bash
uv run uvicorn main:app --reload
```

## API Documentation

- Swagger UI: http://localhost:8000/docs
- ReDoc: http://localhost:8000/redoc

