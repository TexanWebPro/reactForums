import {
  boolean,
  date,
  integer,
  pgTable,
  serial,
  text,
} from "drizzle-orm/pg-core";

export const forumSchema = pgTable("rf_forums", {
  id: serial("id").primaryKey().notNull(),
  isCategory: boolean("is_category").notNull(),
  parentForumId: integer("parent_forum_id"),
  name: text("name").notNull(),
  description: text("description").notNull(),
  linkTo: text("link_to"),
  password: text("password"),
  displayOrder: integer("display_order").notNull(),
  threadCount: integer("thread_count").notNull(),
  postCount: integer("post_count").notNull(),
  lastPostTime: date("last_post_time"),
  lastPostAuthor: text("last_post_author"), // lastPostAuthor: "uuid", // user ID
  lastPostThreadId: integer("last_post_thread_id"),
  lastPostThreadSubject: text("last_post_thread_subject"),
  rulesTitle: text("rules_title"),
  rules: text("rules"),
  unapprovedThreadCount: integer("unapproved_thread_count")
    .notNull()
    .default(0),
  unapprovedPostCount: integer("unapproved_post_count").notNull().default(0),
  isActive: boolean("is_active").notNull().default(false),
  isLocked: boolean("is_locked").notNull().default(false),
  allowRatings: boolean("allow_ratings").notNull().default(true),
  usePostCounts: boolean("user_post_counts").notNull().default(true),
  mustReviewPosts: boolean("must_review_posts").notNull().default(false),
  mustReviewThreads: boolean("must_review_threads").notNull().default(false),
  mustReviewAttachments: boolean("must_review_attachments")
    .notNull()
    .default(false),
  canModsEdit: boolean("can_mods_edits").notNull().default(true),
});
