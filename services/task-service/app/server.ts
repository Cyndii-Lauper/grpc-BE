// deno-lint-ignore-file
import { connectDB } from "../database/index.ts";
import grpc from "@grpc/grpc-js";
import protoLoader from "@grpc/proto-loader";
import { config } from "https://deno.land/x/dotenv@v3.2.2/mod.ts";
import path from "node:path";
import { fileURLToPath } from "node:url";
import {
    createTaskController,
    readTaskController,
    updateTaskController,
    deleteTaskController,
} from "../src/v1/controller/task.controller.ts";

const env = config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PROTO_PATH = path.join(__dirname, "../proto/task.proto");

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

const port = env.GRPC_PORT;

server.bindAsync(
    `0.0.0.0:${port}`,
    grpc.ServerCredentials.createInsecure(),
    async () => {
        await connectDB();
        console.log(`gRPC server running at http://0.0.0.0:${port}`);
        server.start();
    }
);
