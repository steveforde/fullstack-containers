FROM node:24 AS build-stage
WORKDIR /usr/src/app

COPY package*.json ./

# Force npm ci to include devDependencies (like Vitest)
RUN npm ci --include=dev

COPY . .

# Run unit tests
RUN npm test

# Build production assets
RUN npm run build

# Stage 2: Serve static files with Nginx
FROM nginx:1.29-alpine

COPY --from=build-stage /usr/src/app/dist /usr/share/nginx/html