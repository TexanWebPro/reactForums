import { sql } from "drizzle-orm";
import {
  boolean,
  integer,
  pgTable,
  serial,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";
import { forumSchema } from "./forum";
import { threadSchema } from "./thread";
import { userSchema } from "./user";

export const postSchema = pgTable("rf_posts", {
  id: serial("id").primaryKey().notNull(),
  threadId: integer("thread_id")
    .notNull()
    .references(() => threadSchema.id),
  parentPostId: integer("parent_post_id"),
  forumId: integer("forum_id")
    .notNull()
    .references(() => forumSchema.id),
  subject: varchar("subject"),
  iconId: varchar("icon_id"),
  userId: integer("user_id")
    .notNull()
    .references(() => userSchema.id),
  username: varchar("username").notNull(),
  createdAt: timestamp("created_at")
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
  editUserId: integer("edit_user_id").references(() => userSchema.id),
  updatedAt: timestamp("updated_at")
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
  isDraft: boolean("is_draft").notNull().default(false),
  isApproved: boolean("is_approved").notNull().default(true),
  content: varchar("content").notNull(),
  ipAddress: varchar("ip_address").notNull(),
  longIpAddress: varchar("long_ip_address").notNull(),
  includeSignature: boolean("include_signature").notNull().default(true),
  isDeleted: boolean("is_deleted").notNull().default(false),
  deletedAt: timestamp("deleted_at"),
});
