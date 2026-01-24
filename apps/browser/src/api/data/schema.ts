export * from "@reactforums/adapter-drizzle-pg/schema";

/**
 * drizzle-kit does not run files.
 * It statically reads them.
 *
 * Therefore this file exists to export
 * the full default schema so that at this
 * level drizzle-kit can see pgTable()
 * and properly run the migrations.
 *
 * Importing/exporting the defaultSchema
 * itself will not work since drizzle-kit
 * only statically reads files, and
 * does not follow references.
 */
