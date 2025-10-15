# Full-Stack Item Management System

A modern full-stack CRUD application demonstrating seamless integration between FastAPI backend and React frontend with Docker containerization.

## 🎯 Project Overview

This project contains a complete full-stack application with:

- **Backend**: Python FastAPI with uv package manager
- **Frontend**: React + TypeScript + Vite
- **Containerization**: Docker & Docker Compose

## Task Overview

This repository containts a full-stack application with a FastAPI backend and a React frontend. Your task is to create an LLM integration that allows users to ask a short question and display the response from the LLM in the frontend.
Also display the response length in a bar plot.

You can use any tools you like to complete the task. The goal is to understand how you approach the problem.

In the next steps you will find a detailed guide on how to set up and run the application. Then the required steps are outlined in detail.

## 🚀 Quick Start

### Prerequisites

- Ensure you have git installed
- Install [Docker Desktop](https://docs.docker.com/desktop) for your OS

### 1. Clone and Run

```bash
git clone https://github.com/srijan-pro2future/pro2future_assessment.git
cd pro2future_assessment

# Build and run with Docker Compose then watch for changes
docker compose build && docker compose up --watch
```

### 2. Access the Application

- **Frontend UI**: http://localhost:5173
- **Backend API**: http://localhost:8000
- **API Documentation (Swagger)**: http://localhost:8000/docs
- **API Documentation (ReDoc)**: http://localhost:8000/redoc

### 3. Stop the Services

```bash
docker compose down
```

## 🛠️ Development

### Run Backend Separately

Only if you want to run the backend without Docker. To get full support for dependencies, use `uv`.

````bash
cd backend
```bash

# Install uv first if not installed
# Windows: powershell -c "irm https://astral.sh/uv/install.ps1 | iex"
# Linux/Mac: curl -LsSf https://astral.sh/uv/install.sh | sh

# Install dependencies and run
uv sync
uv run uvicorn main:app --reload --host 0.0.0.0 --port 8000
````

### Run Frontend Separately

Only if you want to run the frontend without Docker.
You need to install [Node.js](https://nodejs.org/en/download) first.
You can install pnpm via npm (it is faster and more efficient than npm).

```bash
# Install pnpm globally (if not already installed)
npm install -g pnpm
```

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

## Your Task

### LLM Integration

Add a new docker service for the LLM model

#### 1. Add the service in the docker-compose.yml

For example you can use [Ollama](https://hub.docker.com/r/ollama/ollama).
You can also use any other LLM provider of your choice.

#### 2. Choose a small model

Choose a small model that can run on your local machine.
For example you can use the model `gemma3` with 270M parameters from [here](https://ollama.com/library/gemma3).
Make sure to pull the model in the dockerfile of the LLM service.
Add a docker volume to persist the model data.

### 3. Update the backend

Add an endpoint `/llm` in the backend that takes a question as input, performs an LLM call to the docker service, and returns the response from the LLM. You can test the endpoint using the Swagger UI (http://localhost:8000/docs).

### 4. Update the frontend

You can restructure the frontend as you like and also remove the item management functionality if you want to. This is just to give you a starting point.

#### 4. LLM Component

Create a new component `LLM.tsx` in the `src/components` folder.
It should contain an input field for the question and a button to submit the question.
On submit, it should call the `/llm` endpoint and display the response in a text area.
The response length should be added to an array of response lengths that is passed to the Bar Plot component.

#### 5. Bar Plot Component

Install d3.js in the frontend using pnpm or npm.

Create a new component `ResponseLengthPlot.tsx` in the `src/components` folder.
It should take an array of response lengths as prop and display a bar plot using a [Bar Chart](https://d3-graph-gallery.com/barplot.html).

### Create a pull request

Once you have completed the task, create a pull request to the main branch of this repository.
