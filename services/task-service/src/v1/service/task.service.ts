import type { TaskItem } from "../../../types/task.d.ts";
import { TaskModel } from "../model/task.model.ts";
import { v4 as uuidv4 } from "uuid";

const errResponse = (message: string) => ({
    success: false,
    message,
});

export const getAllTasks = async () => {
    try {
        const tasks = await TaskModel.find();
        return { success: true, tasks };
    } catch (err: unknown) {
        console.error("Error when retrieving all tasks:", err);
        return {
            success: false,
            message: "Unable to get task list",
            tasks: [],
        };
    }
};

export const createTask = async (taskData: TaskItem) => {
    try {
        const existingTask = await TaskModel.findOne({ id: taskData.id });
        if (existingTask) {
            return errResponse("Task ID already exists");
        }
        if (!taskData.title) {
            return errResponse("Title are required");
        }
        taskData.id = uuidv4();
        const task = new TaskModel(taskData);
        const savedTask = await task.save();

        return { success: true, task: savedTask };
    } catch (err: unknown) {
        console.error("Error creating task:", err);
        return errResponse("Failed to create task");
    }
};

export const readTaskbyId = async (id: string) => {
    try {
        const task = await TaskModel.findOne({ id });

        if (!task) {
            return errResponse("Task not found");
        }

        return { success: true, task };
    } catch (err: unknown) {
        console.error("Error reading task:", err);
        return errResponse("Failed to read task");
    }
};

export const updateTask = async (
    id: string,
    updatedData: Partial<TaskItem>
) => {
    try {
        const updatedTask = await TaskModel.findOneAndUpdate(
            { id },
            updatedData,
            { new: true }
        );

        if (!updatedTask) {
            return errResponse("Task not found");
        }

        return { success: true, task: updatedTask };
    } catch (err: unknown) {
        console.error("Error updating task:", err);
        return errResponse("Failed to update task");
    }
};

export const deleteTask = async (id: string) => {
    try {
        const deletedTask = await TaskModel.findOneAndDelete({ id });

        if (!deletedTask) {
            return errResponse("Task not found");
        }

        return errResponse("Task deleted successfully");
    } catch (err: unknown) {
        console.error("Error deleting task:", err);
        return errResponse("Failed to delete task");
    }
};
