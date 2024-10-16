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

export const getAllTasksController = async (): Promise<ListTasksResponse> => {
    const response = await getAllTasks();
    return {
        tasks: response.tasks.map((t) => ({
            id: t.id.toString(),
            title: t.title,
            description: t.description,
            completed: t.completed,
        })),
    };
};

export const createTaskController = async (
    request: TaskItem
): Promise<TaskResponse> => {
    return await createTask(request);
};

export const readTaskController = async (
    request: TaskItem & { id: string }
): Promise<TaskResponse> => {
    return await readTaskbyId(request.id);
};

export const updateTaskController = async (
    request: TaskItem & { id: string }
): Promise<TaskResponse> => {
    return await updateTask(request.id, request);
};

export const deleteTaskController = async (request: {
    id: string;
}): Promise<TaskResponse> => {
    return await deleteTask(request.id);
};
