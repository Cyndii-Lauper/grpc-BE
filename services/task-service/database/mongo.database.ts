import { connect } from "mongoose";
import { dbConfig } from "../config/index.ts";

export const connectDB = async () => {
    try {
        const uri = `${dbConfig.mongoURI}`;
        await connect(uri);

        console.log("Connected to MongoDB");
    } catch (err) {
        console.error("Could not connect to MongoDB...", err);
        setTimeout(connectDB, 5000);
    }
};
