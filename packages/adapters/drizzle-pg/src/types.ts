import { drizzle } from "drizzle-orm/node-postgres";

export type DrizzlePgDatabase = ReturnType<typeof drizzle>;
