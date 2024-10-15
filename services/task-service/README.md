# Task Service

## Project Description

Task Service is a gRPC service built with TypeScript, utilizing Mongoose to interact with MongoDB. This service provides create, read, update, and delete (CRUD) functionalities for tasks.

## Requirements

- **Node.js** version 20.x.x
- **MongoDB**
- **Deno** and **Bun**

## Installation

1. **Clone the repository:**

    ```bash
    git clone <repository-url>
    cd services/task-service
    ```

2. **Install dependencies:**

    ```bash
    deno i
    ```

3. **Set up environment variables:**

    Create a `.env` file in the `services/task-service` directory and add the following variables:

    ```env
    MONGODB_USERNAME=<MongoDB username>
    MONGODB_PASSWORD=<MongoDB password>
    MONGODB_CLUSTER=<MongoDB cluster>
    MONGODB_DBNAME=<database name>
    GRPC_PORT=50051
    ```

## Usage

### Running the Service

- **Test the project:**

    ```bash
    bun start
    ```

- **Run the gRPC server:**

    ```bash
    deno task dev:server
    ```

- **Run the gRPC client:**

    ```bash
    deno task dev:client
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
