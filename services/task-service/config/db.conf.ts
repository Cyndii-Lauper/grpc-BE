import { dbKeys } from "./db.keys.ts";

export const dbConfig = {
    mongoURI: `mongodb+srv://${dbKeys.mongoUser}:${dbKeys.mongoPassword}@${dbKeys.mongoCluster}/?retryWrites=true&w=majority&appName=${dbKeys.mongoName}`,
    options: {},
};
