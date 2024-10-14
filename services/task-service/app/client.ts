import grpc from "@grpc/grpc-js";
import protoLoader from "@grpc/proto-loader";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PROTO_PATH = path.join(__dirname, "../../proto/task.proto");

const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true,
});

const taskProto = grpc.loadPackageDefinition(packageDefinition).task;

const client = new (taskProto as any).TaskService(
    "localhost:50051",
    grpc.credentials.createInsecure()
);

//* ---Create a new task---
client.CreateTask(
    {
        id: "1",
        title: "Test Task",
        description: "Test Description",
        completed: false,
    },
    (error: any, response: any) => {
        if (!error) {
            console.log("Task Created:", response);
        } else {
            console.error("Error:", error);
        }
    }
);

//* ---Read a task---
client.ReadTask({ id: "1" }, (error: any, response: any) => {
    if (!error) {
        console.log("Task Read:", response);
    } else {
        console.error("Error:", error);
    }
});

//* ---Update a task---
client.UpdateTask(
    {
        id: "1",
        title: "Updated Task",
        description: "Updated Description",
        completed: true,
    },
    (error: any, response: any) => {
        if (!error) {
            console.log("Task Updated:", response);
        } else {
            console.error("Error:", error);
        }
    }
);

//* ---Delete a task---
client.DeleteTask({ id: "1" }, (error: any, response: any) => {
    if (!error) {
        console.log("Task Deleted:", response);
    } else {
        console.error("Error:", error);
    }
});
