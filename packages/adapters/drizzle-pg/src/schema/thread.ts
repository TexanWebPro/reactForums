import { sql } from "drizzle-orm";
import {
  boolean,
  date,
  integer,
  pgTable,
  serial,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";
import { forumSchema } from "./forum";

export const threadSchema = pgTable("rf_threads", {
  id: serial("id").primaryKey().notNull(),
  forumId: integer("forum_id")
    .notNull()
    .references(() => forumSchema.id),
  subject: varchar("subject").notNull(),
  prefixId: varchar("prefix_id"),
  iconId: varchar("icon_id"),
  pollId: varchar("poll_id"),
  userId: integer("user_id").notNull(), // add reference later
  username: varchar("username").notNull(),
  createdAt: timestamp("created_at")
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
  updatedAt: timestamp("updated_at")
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
  firstPostId: integer("first_post_id"),
  lastPostCreatedAt: date("last_post_created_at"),
  lastPosterUsername: varchar("last_poster_username"),
  lastPosterId: integer("last_poster_id"),
  views: integer("views").notNull().default(0),
  replies: integer("replies").notNull().default(0),
  isClosed: boolean("is_closed").notNull().default(false),
  isSticky: boolean("is_sticky").notNull().default(false),
  ratingsNumber: integer("ratings_number").notNull().default(0),
  ratingsTotal: integer("ratings_total").notNull().default(0),
  moderatorNotes: varchar("moderator_notes"),
  isDraft: boolean("is_draft").notNull().default(false),
  isApproved: boolean("is_approved").notNull().default(true),
  unapprovedPostsTotal: integer("unapproved_posts_total").notNull().default(0),
  attachmentTotal: integer("attachment_total").notNull().default(0),
  isDeleted: boolean("is_deleted").notNull().default(false),
  deletedAt: timestamp("deleted_at"),
});
