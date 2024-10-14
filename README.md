# Microservices gRPC Project

## Project Overview

This project implements a microservices architecture using gRPC in Node.js. Each microservice communicates with others via gRPC, ensuring efficient and type-safe inter-service communication. The project is designed to handle scalable and distributed systems.

## Requirements

- **Node.js** version 20.x.x
- **npm** or **yarn** or **bun**
- **Docker** (for containerization, optional)
- **MongoDB** or any preferred database

## Services

### 1. **User Service**
Manages user-related operations like registration, authentication, and profile management.

### 2. **Task Service**
Handles task management, including creating, reading, updating, and deleting tasks.

### 3. **Notification Service**
Sends notifications to users when specific events occur (e.g., task assignments).

### 4. **Gateway Service**
Acts as an entry point for external clients, forwarding requests to the relevant microservices via gRPC.

## Features
- **Microservices**: Each service has its own independent responsibility.
- **gRPC**: Efficient communication between services.
- **Docker**: Containerization for ease of deployment and scaling.
- **MongoDB**: Used as the default database but can be replaced with any other.
