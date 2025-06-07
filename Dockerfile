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

# Run the tests on container start
CMD ["npm", "test"]
