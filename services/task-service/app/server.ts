import connectDB from "../database/mongo.database.ts";
import {
    createTaskController,
    readTaskController,
    updateTaskController,
    deleteTaskController,
    getAllTasksController,
} from "../src/v1/controller/task.controller.ts";
import { config, GrpcServer } from "../deps.ts";

import { TaskService } from "../types/task.d.ts";

const protoPath = new URL("../proto/task.proto", import.meta.url);
const protoFile = await Deno.readTextFile(protoPath);

const server = new GrpcServer();

const taskService: TaskService = {
    CreateTask: createTaskController,
    ReadTask: readTaskController,
    UpdateTask: updateTaskController,
    DeleteTask: deleteTaskController,
    ListTasks: getAllTasksController,
};

server.addService<TaskService>(protoFile, taskService);

const port = +config().GRPC_PORT || 50052;

await connectDB();
console.log(`gonna listen on ${port} port`);
for await (const conn of Deno.listen({ port: port })) {
    server.handle(conn);
}
