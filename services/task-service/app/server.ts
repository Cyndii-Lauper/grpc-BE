import { connectDB } from "@/database/index.js";
import grpc from "@grpc/grpc-js";
import protoLoader from "@grpc/proto-loader";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import {
    createTaskController,
    readTaskController,
    updateTaskController,
    deleteTaskController,
} from "../src/v1/controller/task.controller.js";

dotenv.config();

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

const taskPackage = grpc.loadPackageDefinition(packageDefinition) as any;
const taskProto = taskPackage.task;

const server = new grpc.Server();

server.addService(taskProto.TaskService.service, {
    CreateTask: createTaskController,
    ReadTask: readTaskController,
    UpdateTask: updateTaskController,
    DeleteTask: deleteTaskController,
});

const port = process.env.GRPC_PORT;

server.bindAsync(
    `0.0.0.0:${port}`,
    grpc.ServerCredentials.createInsecure(),
    async () => {
        await connectDB();
        console.log(`gRPC server running at http://0.0.0.0:${port}`);
        server.start();
    }
);
