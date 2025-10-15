# Frontend Dockerfile
FROM node:22-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package files first for better caching
COPY package.json pnpm-lock.yaml ./

# install pnpm globally (faster than npm)
RUN npm install -g pnpm

# install project dependencies using pnpm
RUN pnpm install

# Copy rest of the application (will be overridden by volume in development)
COPY . .

# expose the server port
EXPOSE 5173

# Command to run the Vite development server with host flag for Docker
CMD ["pnpm", "run", "dev", "--host", "0.0.0.0"]
