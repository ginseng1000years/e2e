#!/bin/bash

# Replace placeholders in .env with environment variables if set
if [ -f .env ]; then
  if [ ! -z "$TEST_USERNAME" ]; then
    sed -i "s/TEST_USERNAME=PLACEHOLDER/TEST_USERNAME=$TEST_USERNAME/g" .env
  fi
  if [ ! -z "$TEST_PASSWORD" ]; then
    sed -i "s/TEST_PASSWORD=PLACEHOLDER/TEST_PASSWORD=$TEST_PASSWORD/g" .env
  fi
  # Grant read permission to .env file
  chmod 644 .env
fi

# Debug info: print current directory and list files
echo "Current directory: $(pwd)"
echo "Files in directory:"
ls -la

# Source .env to export environment variables
if [ -f .env ]; then
  source .env
else
  echo ".env file not found"
fi

# Run tests
npm test

# Generate report
npm run generate-report

# Verify report contents
echo "Contents of ./cucumber-html-report:"
ls -la ./cucumber-html-report

# Kill any existing http-server processes
pkill -f "http-server" || echo "No existing http-server process found"

# Serve the report directory with no-cache option
http-server ./cucumber-html-report -p 8080 -a 0.0.0.0 --no-cache
