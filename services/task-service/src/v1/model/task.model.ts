import { Schema, model } from "mongoose";
import { v4 as uuidv4 } from "uuid";

interface ITask {
    id: string;
    title: string;
    description?: string;
    startTime?: string;
    endTime?: string;
    completed: boolean;
}

const taskSchema = new Schema<ITask>({
    id: {
        type: String,
        unique: true,
        default: () => uuidv4(),
    },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: false,
    },
    startTime: {
        type: String,
        required: false,
    },
    endTime: {
        type: String,
        required: false,
    },
    completed: {
        type: Boolean,
        default: false,
    },
});

export const TaskModel = model<ITask>("Task", taskSchema);
