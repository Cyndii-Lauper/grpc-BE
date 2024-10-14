import { dbKeys } from "./db.keys.js";

export const dbConfig = {
    mongoURI: `mongodb+srv://${dbKeys.mongoUser}:${dbKeys.mongoPassword}@${dbKeys.mongoCluster}/?retryWrites=true&w=majority&appName=${dbKeys.mongoName}`,
    options: {},
};
