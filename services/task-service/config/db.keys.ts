import { config } from "../deps.ts";

const env = config();

export const dbKeys = {
    mongoUser: env.MONGODB_USERNAME,
    mongoPassword: env.MONGODB_PASSWORD,
    mongoCluster: env.MONGODB_CLUSTER,
    mongoName: env.MONGODB_DBNAME,
};
