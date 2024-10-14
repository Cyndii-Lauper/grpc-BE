import { connectDB } from "@/database/index.js";
// import cors from "cors";
import dotenv from "dotenv";
import express from "express";
// import helmet from "helmet";
// import morgan from "morgan";

dotenv.config();

// Constants
const app = express();
const port = process.env.PORT || 3000;

// Connect MongoDB
connectDB();

// app.use(cors());
// app.use(morgan("combined"));
// app.use(helmet());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello world!!");
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
