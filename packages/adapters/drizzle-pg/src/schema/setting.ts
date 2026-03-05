import { integer, pgTable, serial, varchar } from "drizzle-orm/pg-core";

export const settingSchema = pgTable("rf_settings", {
  id: serial("id").primaryKey().notNull(),
  name: varchar("name").notNull().unique(),
  title: varchar("title").notNull(),
  value: varchar("value").notNull(),
  description: varchar("description").notNull(),
  optionsCode: varchar("options_code").notNull(),
  groupId: integer("groupd_id").notNull(),
  displayOrder: integer("display_order").notNull(),
});
