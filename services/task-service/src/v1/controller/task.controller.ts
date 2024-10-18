import {
    createTask,
    readTaskbyId,
    updateTask,
    deleteTask,
    getAllTasks,
} from "../service/task.service.ts";
import type {
    ListTasksResponse,
    TaskItem,
    TaskResponse,
} from "../../../types/task.d.ts";
import { handleError, mapTaskToResponse } from "../../../utils/utils.ts";

export const getAllTasksController = async (): Promise<ListTasksResponse> => {
    try {
        const tasks = await getAllTasks();
        return {
            tasks: tasks.map(mapTaskToResponse),
            message: "Show all tasks successfully",
        };
    } catch (err) {
        return handleError(err, "Unable to get task list");
    }
};

export const createTaskController = async (
    request: TaskItem
): Promise<TaskResponse> => {
    try {
        const task = await createTask(request);
        return {
            success: true,
            task: mapTaskToResponse(task),
            message: "Task created successfully",
        };
    } catch (err) {
        return handleError(err, "Task creation failed");
    }
};

export const readTaskController = async (
    request: TaskItem & { id: string }
): Promise<TaskResponse> => {
    try {
        const task = await readTaskbyId(request.id);
        if (!task) {
            throw new Error("Task not found");
        }
        return {
            success: true,
            task: mapTaskToResponse(task),
            message: "Find task successfully",
        };
    } catch (err) {
        return handleError(err, "Failed to read task");
    }
};

export const updateTaskController = async (
    request: TaskItem & { id: string }
): Promise<TaskResponse> => {
    try {
        const task = await updateTask(request.id, request);
        if (!task) {
            throw new Error("Task not found");
        }
        return {
            success: true,
            task: mapTaskToResponse(task),
            message: "Task updated successfully",
        };
    } catch (err) {
        return handleError(err, "Failed to update task");
    }
};

export const deleteTaskController = async (request: {
    id: string;
}): Promise<TaskResponse> => {
    try {
        await deleteTask(request.id);
        return {
            success: true,
            message: "Task deleted successfully",
        };
    } catch (err) {
        return handleError(err, "Failed to delete task");
    }
};
