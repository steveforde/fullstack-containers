# Containers Exercise

A containerized full-stack application developed as part of the Full Stack Open coursework, utilizing Docker and Docker Compose.

## Repositories & Links

* **Full Stack App Repository**: https://github.com/steveforde/containers-app

## Project Structure

containers-app/
├── frontend/
│ ├── dev.Dockerfile
│ └── prod.Dockerfile
├── backend/
│ ├── dev.Dockerfile
│ └── prod.Dockerfile
├── nginx.dev.conf
├── nginx.conf
├── docker-compose.dev.yml
└── docker-compose.yml


## Getting Started

### Prerequisites
- Docker
- Docker Compose

### Development environment

docker compose -f docker-compose.dev.yml up --build


- Frontend: http://localhost:5173
- Backend: http://localhost:3001

Stop the containers:

docker compose -f docker-compose.dev.yml down


### Production environment

docker compose up --build


- App (via nginx reverse proxy): http://localhost

Stop the containers:

docker compose down