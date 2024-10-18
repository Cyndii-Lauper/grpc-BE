import type { TaskItem } from "../types/task.d.ts";

export const handleError = (err: unknown, defaultMessage: string): never => {
    if (err instanceof Error) {
        throw new Error(`${defaultMessage}: ${err.message}`);
    }
    throw new Error(defaultMessage);
};

export const mapTaskToResponse = (task: TaskItem) => ({
    id: task.id?.toString() || "",
    title: task.title,
    description: task.description,
    completed: task.completed,
});
