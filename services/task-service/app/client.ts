import { getClient, config } from "../deps.ts";
import type { TaskService } from "../types/task.d.ts";

const protoPath = new URL("../proto/task.proto", import.meta.url);
const protoFile = await Deno.readTextFile(protoPath);

const port = +config().GRPC_PORT || 50052;

const client = getClient<TaskService>({
    port: port,
    root: protoFile,
    serviceName: "TaskService",
});

async function main() {
    try {
        //* --- Get all tasks ---
        const Results = await client.ListTasks({});
        console.log("Task created:", Results);

        //* --- Create new task ---
        const createResult = await client.CreateTask({
            title: "Test Task",
            description: "Test Description",
        });
        console.log("Task created:", createResult);

        const taskId = createResult?.task;
        if (!taskId) {
            throw new Error("Task ID is not returned after creation");
        }

        //* --- Get task by Id ---
        const readResult = await client.ReadTask({
            id: taskId.id,
        });
        console.log("Task read:", readResult.task);

        //* --- Update task by Id ---
        const updateResult = await client.UpdateTask({
            id: taskId.id,
            title: "Updated Task",
            description: "Updated Description",
            completed: true,
        });
        console.log("Task updated:", updateResult);

        //* --- Delete task by Id ---
        const deleteResult = await client.DeleteTask({
            id: taskId.id,
        });
        console.log("Task deleted:", deleteResult);
    } catch (error) {
        console.error("Error occurred:", error);
    }
}

main();
