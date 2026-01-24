import { drizzle } from 'drizzle-orm/node-postgres';

type DrizzlePgDatabase = ReturnType<typeof drizzle>;

export type { DrizzlePgDatabase as D };
