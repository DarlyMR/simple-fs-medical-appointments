# Use the official Node.js 20 image as the base image
FROM node:20-alpine AS builder

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Build the Nuxt.js application
RUN npm run build

# Production stage
FROM node:20-alpine AS production

# Set the working directory in the container
WORKDIR /app

# Copy only the necessary files from the builder stage
COPY --from=builder /app/.output/public ./public
COPY --from=builder /app/.output/server ./server
COPY --from=builder /app/package*.json ./
RUN npm install --only=production

# Expose the port the app will run on
EXPOSE 3000

# Set environment variables
ENV NODE_ENV production
ENV HOST 0.0.0.0
ENV PORT 3000

# Command to start the Nuxt.js application
CMD ["node", "./server/index.mjs"]
