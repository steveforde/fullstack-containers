# Stage 1: Build static production files
FROM node:24 AS build-stage

WORKDIR /usr/src/app

COPY . .

RUN npm ci

# Set the environment variable expected by the README
ENV VITE_BACKEND_URL=http://localhost:3000

RUN npm run build

# Stage 2: Serve static files with Nginx
FROM nginx:1.29-alpine

COPY --from=build-stage /usr/src/app/dist /usr/share/nginx/html