import { DrizzlePgDatabase } from "src/types";
import { seedForums } from "./forums";
import { seedThreads } from "./threads";
import { seedUsers } from "./users";

/**
 * Runs all core seeds in a single transaction.
 *
 * Usage:
 * await seedCore(db);
 *
 * Guarantees atomicity: if any seed fails, no data is written.
 */
export async function seedCore(db: DrizzlePgDatabase) {
  // Drizzle transaction wrapper
  await db.transaction(async (tx) => {
    // 1. Seed users first
    await seedUsers(tx);

    // 2. Seed forums
    await seedForums(tx);
    // 3. Seed threads
    await seedThreads(tx);
  });
}
