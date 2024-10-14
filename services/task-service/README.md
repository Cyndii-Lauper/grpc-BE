# Task Service

## Project Description

Task Service is a gRPC service built with TypeScript, utilizing Mongoose to interact with MongoDB. This service provides create, read, update, and delete (CRUD) functionalities for tasks.

## Requirements

- **Node.js** version 20.x.x
- **MongoDB**
- **npm** or **yarn** or **bun**

## Installation

1. **Clone the repository:**

    ```bash
    git clone <repository-url>
    cd services/task-service
    ```

2. **Install dependencies:**

    ```bash
    bun i
    ```

3. **Set up environment variables:**

    Create a `.env` file in the `services/task-service` directory and add the following variables:

    ```env
    MONGODB_USERNAME=<MongoDB username>
    MONGODB_PASSWORD=<MongoDB password>
    MONGODB_CLUSTER=<MongoDB cluster>
    MONGODB_DBNAME=<database name>
    GRPC_PORT=50051
    PORT=3000
    ```

## Usage

### Running the Service

- **Build the project:**

    ```bash
    bun run build
    ```

- **Run the gRPC server:**

    ```bash
    bun start:server
    ```

- **Run the gRPC client:**

    ```bash
    bun start:client
    ```

- **Run the server in development mode:**

    ```bash
    bun dev
    ```

### Building the Project

To compile TypeScript into JavaScript:

```bash
bun run build
```

### gRPC APIs

The gRPC APIs are defined in the `task.proto` file. The APIs are:

- **CreateTask (Task) returns (TaskResponse):** Creates a new task
- **ReadTask (Id) returns (TaskResponse):** Reads a task by id
- **UpdateTask (Task) returns (TaskResponse):** Updates a task
- **DeleteTask (Id) returns (TaskResponse):** Deletes a task by id

##### Proto File

The gRPC definition is located in `services/task-service/proto/task.proto`.

### Folder Structure

```
task-service/
│
├── app/
│   ├── client.ts
│   ├── server.ts
│   └── index.ts
│
├── src/
│   └── v1/
│       ├── controller/
│       │   └── task.controller.ts
│       ├── model/
│       │   └── task.model.ts
│       └── service/
│           └── task.service.ts
│
├── proto/
│   └── task.proto
│
├── config/
│   ├── db.conf.ts
│   └── db.keys.ts
│
├── database/
│   └── mongo.database.ts
│
├── package.json
├── tsconfig.json
└── README.md
```

### MongoDB Connection

This service uses Mongoose to connect to MongoDB. The connection details are defined in `config/db.conf.ts` and `config/db.keys.ts`.
