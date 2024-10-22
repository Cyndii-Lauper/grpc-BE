import connectDB from "../database/mongo.database.ts";

const port = 50052;

await connectDB();
console.log(`gonna listen on ${port} port`);
