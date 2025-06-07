# Use the official Playwright image with noble version
FROM mcr.microsoft.com/playwright:v1.52.0-noble

# Set working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to leverage Docker cache for npm install
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the project files
COPY . .

# Create .env from .env.example if it exists
RUN cp .env.example .env || echo ".env.example not found, skipping .env creation"

# Install http-server globally to serve static files
RUN npm install -g http-server

# Expose port 8080 for serving the report
EXPOSE 8080

# Copy entrypoint script and set execution permission
COPY deployment/entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

# Use entrypoint script to run commands sequentially and serve report
ENTRYPOINT ["/entrypoint.sh"]
