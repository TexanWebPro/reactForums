import "dotenv/config";
import { seedCore } from "@reactforums/adapter-drizzle-pg/seeds";
import { drizzle } from "drizzle-orm/node-postgres";

const url = process.env.DATABASE_URL;

if (!url) {
  throw new Error("DATABASE_URL is needed to seed the database");
}

export const db = drizzle(url);

async function runSeeds() {
  console.log("Seeding database...");
  await seedCore(db).then(() => {
    console.log("Seeding complete!");
  });
}

runSeeds().catch((err) => {
  console.error("Failed to seed database:", err);
  process.exit(1);
});
