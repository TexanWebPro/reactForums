import { D as DrizzlePgDatabase } from '../types-CS55s55O.mjs';
import { PgTransaction } from 'drizzle-orm/pg-core';
import { NodePgQueryResultHKT } from 'drizzle-orm/node-postgres';
import { ExtractTablesWithRelations } from 'drizzle-orm';

/**
 * Runs all core seeds in a single transaction.
 *
 * Usage:
 * await seedCore(db);
 *
 * Guarantees atomicity: if any seed fails, no data is written.
 */
declare function seedCore(db: DrizzlePgDatabase): Promise<void>;

/**
 * Seeds the default forums.
 *
 * Rules:
 * - Must be idempotent
 * - Must not assume any existing data
 * - Must not delete or mutate user-created records
 */
declare function seedForums(db: PgTransaction<NodePgQueryResultHKT, Record<string, unknown>, ExtractTablesWithRelations<Record<string, unknown>>>): Promise<void>;

/**
 * Seeds the forum with default threads.
 *
 * Rules:
 * - Must be idempotent
 * - Must not assume any existing data
 * - Must not delete or mutate user-created records
 */
declare function seedThreads(db: PgTransaction<NodePgQueryResultHKT, Record<string, unknown>, ExtractTablesWithRelations<Record<string, unknown>>>): Promise<void>;

/**
 * Seeds the default settings.
 *
 * Rules:
 * - Must be idempotent
 * - Must not assume any existing data
 * - Must not delete or mutate user-created records
 */
declare function seedSettings(db: PgTransaction<NodePgQueryResultHKT, Record<string, unknown>, ExtractTablesWithRelations<Record<string, unknown>>>): Promise<void>;

/**
 * Seeds the forum with default posts.
 *
 * Rules:
 * - Must be idempotent
 * - Must not assume any existing data
 * - Must not delete or mutate user-created records
 */
declare function seedPosts(db: PgTransaction<NodePgQueryResultHKT, Record<string, unknown>, ExtractTablesWithRelations<Record<string, unknown>>>): Promise<void>;

export { seedCore, seedForums, seedPosts, seedSettings, seedThreads };
