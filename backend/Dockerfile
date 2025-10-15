FROM python:3.12-slim

RUN pip install uv

# Set working directory
WORKDIR /app

# Copy only dependency files first for better caching
COPY pyproject.toml uv.lock* ./

# Install dependencies
RUN uv sync

# Copy application code (will be overridden by volume in development)
COPY . .

# Install curl for health checks
RUN apt-get update && apt-get install -y curl && rm -rf /var/lib/apt/lists/*

# Expose port
EXPOSE 8000

# Run the application with hot reload
CMD ["uv", "run", "uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000", "--reload"]
