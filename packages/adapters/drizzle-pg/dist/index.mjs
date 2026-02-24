// src/index.ts
import { createForumAdapter } from "@reactforums/core";

// src/schema/forum.ts
import {
  boolean,
  date,
  integer,
  pgTable,
  serial,
  text
} from "drizzle-orm/pg-core";
var forumSchema = pgTable("rf_forums", {
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
  lastPostAuthor: text("last_post_author"),
  // lastPostAuthor: "uuid", // user ID
  lastPostThreadId: integer("last_post_thread_id"),
  lastPostThreadSubject: text("last_post_thread_subject"),
  rulesTitle: text("rules_title"),
  rules: text("rules"),
  unapprovedThreadCount: integer("unapproved_thread_count").notNull().default(0),
  unapprovedPostCount: integer("unapproved_post_count").notNull().default(0),
  isActive: boolean("is_active").notNull().default(false),
  isLocked: boolean("is_locked").notNull().default(false),
  allowRatings: boolean("allow_ratings").notNull().default(true),
  usePostCounts: boolean("user_post_counts").notNull().default(true),
  mustReviewPosts: boolean("must_review_posts").notNull().default(false),
  mustReviewThreads: boolean("must_review_threads").notNull().default(false),
  mustReviewAttachments: boolean("must_review_attachments").notNull().default(false),
  canModsEdit: boolean("can_mods_edits").notNull().default(true)
});

// src/schema/thread.ts
import { sql } from "drizzle-orm";
import {
  boolean as boolean2,
  date as date2,
  integer as integer2,
  pgTable as pgTable2,
  serial as serial2,
  timestamp,
  varchar
} from "drizzle-orm/pg-core";
var threadSchema = pgTable2("rf_threads", {
  id: serial2("id").primaryKey().notNull(),
  forumId: integer2("forum_id").notNull().references(() => forumSchema.id),
  subject: varchar("subject").notNull(),
  prefixId: varchar("prefix_id"),
  iconId: varchar("icon_id"),
  pollId: varchar("poll_id"),
  userId: integer2("user_id").notNull(),
  // add reference later
  username: varchar("username").notNull(),
  createdAt: timestamp("created_at").default(sql`CURRENT_TIMESTAMP`).notNull(),
  updatedAt: timestamp("updated_at").default(sql`CURRENT_TIMESTAMP`).notNull(),
  firstPostId: integer2("first_post_id"),
  lastPostCreatedAt: date2("last_post_created_at"),
  lastPosterUsername: varchar("last_poster_username"),
  lastPosterId: integer2("last_poster_id"),
  views: integer2("views").notNull().default(0),
  replies: integer2("replies").notNull().default(0),
  isClosed: boolean2("is_closed").notNull().default(false),
  isSticky: boolean2("is_sticky").notNull().default(false),
  ratingsNumber: integer2("ratings_number").notNull().default(0),
  ratingsTotal: integer2("ratings_total").notNull().default(0),
  moderatorNotes: varchar("moderator_notes"),
  isDraft: boolean2("is_draft").notNull().default(false),
  isApproved: boolean2("is_approved").notNull().default(true),
  unapprovedPostsTotal: integer2("unapproved_posts_total").notNull().default(0),
  attachmentTotal: integer2("attachment_total").notNull().default(0),
  isDeleted: boolean2("is_deleted").notNull().default(false),
  deletedAt: timestamp("deleted_at")
});

// src/repositories/forum.ts
import { eq } from "drizzle-orm";
var DrizzleForumRepository = class {
  db;
  schema;
  constructor(db, schema) {
    this.db = db;
    this.schema = schema;
  }
  async getAllForums() {
    const forumsTable = this.schema.forums;
    const forums = await this.db.select().from(forumsTable);
    return forums.map((forum) => this.mapDbForumToForum(forum));
  }
  async getForumById(id) {
    const forumsTable = this.schema.forums;
    const forums = await this.db.select().from(this.schema.forums).where(eq(forumsTable.id, id));
    const forum = forums[0];
    if (!forum) return;
    return this.mapDbForumToForum(forum);
  }
  mapDbForumToForum(forum) {
    return {
      ...forum,
      lastPostTime: forum.lastPostTime ? new Date(forum.lastPostTime) : null,
      lastPostAuthor: forum.lastPostAuthor ?? null,
      lastPostThreadId: forum.lastPostThreadId ?? null,
      lastPostThreadSubject: forum.lastPostThreadSubject ?? null,
      rulesTitle: forum.rulesTitle ?? null,
      rules: forum.rules ?? null
    };
  }
};

// src/repositories/thread.ts
import { eq as eq2 } from "drizzle-orm";
var DrizzleThreadRepository = class {
  db;
  schema;
  constructor(db, schema) {
    this.db = db;
    this.schema = schema;
  }
  async getAllThreadsInForum(forumId) {
    const threadsTable = this.schema.threads;
    const threads = await this.db.select().from(threadsTable).where(eq2(threadsTable.forumId, forumId));
    return threads.map((thread) => this.mapDbThreadToThread(thread));
  }
  async getThreadById(threadId) {
    const threadsTable = this.schema.threads;
    const threads = await this.db.select().from(threadsTable).where(eq2(threadsTable.id, threadId));
    const thread = threads[0];
    if (!thread) return;
    return this.mapDbThreadToThread(thread);
  }
  mapDbThreadToThread(thread) {
    return {
      ...thread,
      lastPostCreatedAt: thread.lastPostCreatedAt ? new Date(thread.lastPostCreatedAt) : null
    };
  }
};

// src/index.ts
var defaultSchema = {
  forums: forumSchema,
  threads: threadSchema
};
function drizzlePgAdapter(options) {
  const { db } = options;
  const schema = options.schema ?? defaultSchema;
  const forumRepo = new DrizzleForumRepository(db, schema);
  const threadRepo = new DrizzleThreadRepository(db, schema);
  return createForumAdapter({
    forum: forumRepo,
    thread: threadRepo
  });
}
export {
  defaultSchema,
  drizzlePgAdapter
};
//# sourceMappingURL=index.mjs.map