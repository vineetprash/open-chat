# Use Node.js base image
FROM node:20

# Set working directory
WORKDIR /app

# Copy dependencies
COPY package.json package-lock.json ./
RUN npm install --legacy-peer-deps

# Copy frontend files
COPY . .

# Build React app
# RUN npm run build

# Expose port
EXPOSE 3000

# Start the app
CMD ["npm", "run", "dev"]
