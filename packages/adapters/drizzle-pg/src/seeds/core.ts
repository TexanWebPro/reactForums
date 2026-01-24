import { DrizzlePgDatabase } from "src/types";
import { seedForums } from "./forums";

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
    // 1. Seed roles first (permissions)
    // await seedRoles(tx);

    // 2. Seed forums
    await seedForums(tx);

    // 3. Add other seeds here in order if needed
    // e.g., await seedCategories(tx);
  });
}
