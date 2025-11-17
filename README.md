# Realtime_chat_application

A basic real-time chat application built with:

- Node.js + Express
- Socket.IO for real-time messages
- Nginx static frontend
- Docker + Docker Compose for containerization
- Optional Ansible script for simple deployment

## How It Works
- Backend broadcasts messages to all connected clients.
- Frontend sends and receives messages using Socket.IO.
- Docker Compose runs both containers:
  - Backend on port 3000
  - Frontend on port 8080

## Run Locally
