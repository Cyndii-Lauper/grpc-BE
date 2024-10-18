import type { TaskItem } from "../../../types/task.d.ts";
import { TaskModel } from "../model/task.model.ts";
import { v4 as uuidv4 } from "uuid";

export const getAllTasks = async () => {
    return await TaskModel.find();
};

export const createTask = async (taskData: TaskItem) => {
    const existingTask = await TaskModel.findOne({ id: taskData.id });
    if (existingTask) {
        throw new Error("Task ID already exists");
    }
    if (!taskData.title) {
        throw new Error("Title is required");
    }
    taskData.id = uuidv4();
    const task = new TaskModel(taskData);
    return await task.save();
};

export const readTaskbyId = async (id: string) => {
    const task = await TaskModel.findOne({ id });
    if (!task) {
        throw new Error("Task not found");
    }
    return task;
};

export const updateTask = async (
    id: string,
    updatedData: Partial<TaskItem>
) => {
    return await TaskModel.findOneAndUpdate({ id }, updatedData, {
        new: true,
    });
};

export const deleteTask = async (id: string) => {
    return await TaskModel.findOneAndDelete({ id });
};
