// deno-lint-ignore-file no-explicit-any
import {
    createTask,
    readTask,
    updateTask,
    deleteTask,
} from "../service/task.service.ts";

export const createTaskController = async (call: any, callback: any) => {
    const result = await createTask(call.request);
    callback(null, result);
};

export const readTaskController = async (call: any, callback: any) => {
    const result = await readTask(call.request.id);
    callback(null, result);
};

export const updateTaskController = async (call: any, callback: any) => {
    const result = await updateTask(call.request.id, call.request);
    callback(null, result);
};

export const deleteTaskController = async (call: any, callback: any) => {
    const result = await deleteTask(call.request.id);
    callback(null, result);
};
