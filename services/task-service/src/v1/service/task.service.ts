import { TaskModel } from "../model/task.model.ts";

export const createTask = async (taskData: {
    id: string;
    title: string;
    description: string;
    completed?: boolean;
}) => {
    try {
        const task = new TaskModel(taskData);
        const savedTask = await task.save();
        return { success: true, task: savedTask };
    } catch (err) {
        console.error("Error creating task:", err);
        return { success: false, message: "Failed to create task" };
    }
};

export const readTask = async (id: string) => {
    try {
        const task = await TaskModel.findById(id);
        if (!task) {
            return { success: false, message: "task not found" };
        }
        return { success: true, task };
    } catch (err) {
        console.error("Error reading task:", err);
        return { success: false, message: "Failed to read task" };
    }
};

export const updateTask = async (
    id: string,
    updatedData: { title?: string; description?: string; completed?: boolean }
) => {
    try {
        const updatedTask = await TaskModel.findByIdAndUpdate(id, updatedData, {
            new: true,
        });
        if (!updatedTask) {
            return { success: false, message: "Task not found" };
        }
        return { success: true, task: updatedTask };
    } catch (err) {
        console.error("Error updating task:", err);
        return { success: false, message: "Failed to update task" };
    }
};

export const deleteTask = async (id: string) => {
    try {
        const deletedTask = await TaskModel.findByIdAndDelete(id);
        if (!deletedTask) {
            return { success: false, message: "Task not found" };
        }
        return { success: true, message: "Task deleted successfully" };
    } catch (err) {
        console.error("Error deleting task:", err);
        return { success: false, message: "Failed to delete task" };
    }
};
