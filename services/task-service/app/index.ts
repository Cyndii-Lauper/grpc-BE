import express, { Request, Response } from "express";

// Constants
const app = express();
const port = 3000;

app.use(express.json());

app.get("/", (_req: Request, res: Response) => {
    res.send("Hello world!!");
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
