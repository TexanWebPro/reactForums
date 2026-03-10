import {
  defaultSchema,
  drizzlePgAdapter,
} from "@reactforums/adapter-drizzle-pg";
import { drizzle } from "drizzle-orm/node-postgres";

const url = process.env.DATABASE_URL;

if (!url) {
  throw new Error("DATABASE_URL is not defined at runtime");
}

export const db = drizzle(url, { schema: defaultSchema });

export const repository = drizzlePgAdapter({ db });
