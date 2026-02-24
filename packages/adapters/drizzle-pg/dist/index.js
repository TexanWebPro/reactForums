"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  defaultSchema: () => defaultSchema,
  drizzlePgAdapter: () => drizzlePgAdapter
});
module.exports = __toCommonJS(index_exports);
var import_core = require("@reactforums/core");

// src/schema/forum.ts
var import_pg_core = require("drizzle-orm/pg-core");
var forumSchema = (0, import_pg_core.pgTable)("rf_forums", {
  id: (0, import_pg_core.serial)("id").primaryKey().notNull(),
  isCategory: (0, import_pg_core.boolean)("is_category").notNull(),
  parentForumId: (0, import_pg_core.integer)("parent_forum_id"),
  name: (0, import_pg_core.text)("name").notNull(),
  description: (0, import_pg_core.text)("description").notNull(),
  linkTo: (0, import_pg_core.text)("link_to"),
  password: (0, import_pg_core.text)("password"),
  displayOrder: (0, import_pg_core.integer)("display_order").notNull(),
  threadCount: (0, import_pg_core.integer)("thread_count").notNull(),
  postCount: (0, import_pg_core.integer)("post_count").notNull(),
  lastPostTime: (0, import_pg_core.date)("last_post_time"),
  lastPostAuthor: (0, import_pg_core.text)("last_post_author"),
  // lastPostAuthor: "uuid", // user ID
  lastPostThreadId: (0, import_pg_core.integer)("last_post_thread_id"),
  lastPostThreadSubject: (0, import_pg_core.text)("last_post_thread_subject"),
  rulesTitle: (0, import_pg_core.text)("rules_title"),
  rules: (0, import_pg_core.text)("rules"),
  unapprovedThreadCount: (0, import_pg_core.integer)("unapproved_thread_count").notNull().default(0),
  unapprovedPostCount: (0, import_pg_core.integer)("unapproved_post_count").notNull().default(0),
  isActive: (0, import_pg_core.boolean)("is_active").notNull().default(false),
  isLocked: (0, import_pg_core.boolean)("is_locked").notNull().default(false),
  allowRatings: (0, import_pg_core.boolean)("allow_ratings").notNull().default(true),
  usePostCounts: (0, import_pg_core.boolean)("user_post_counts").notNull().default(true),
  mustReviewPosts: (0, import_pg_core.boolean)("must_review_posts").notNull().default(false),
  mustReviewThreads: (0, import_pg_core.boolean)("must_review_threads").notNull().default(false),
  mustReviewAttachments: (0, import_pg_core.boolean)("must_review_attachments").notNull().default(false),
  canModsEdit: (0, import_pg_core.boolean)("can_mods_edits").notNull().default(true)
});

// src/schema/thread.ts
var import_drizzle_orm = require("drizzle-orm");
var import_pg_core2 = require("drizzle-orm/pg-core");
var threadSchema = (0, import_pg_core2.pgTable)("rf_threads", {
  id: (0, import_pg_core2.serial)("id").primaryKey().notNull(),
  forumId: (0, import_pg_core2.integer)("forum_id").notNull().references(() => forumSchema.id),
  subject: (0, import_pg_core2.varchar)("subject").notNull(),
  prefixId: (0, import_pg_core2.varchar)("prefix_id"),
  iconId: (0, import_pg_core2.varchar)("icon_id"),
  pollId: (0, import_pg_core2.varchar)("poll_id"),
  userId: (0, import_pg_core2.integer)("user_id").notNull(),
  // add reference later
  username: (0, import_pg_core2.varchar)("username").notNull(),
  createdAt: (0, import_pg_core2.timestamp)("created_at").default(import_drizzle_orm.sql`CURRENT_TIMESTAMP`).notNull(),
  updatedAt: (0, import_pg_core2.timestamp)("updated_at").default(import_drizzle_orm.sql`CURRENT_TIMESTAMP`).notNull(),
  firstPostId: (0, import_pg_core2.integer)("first_post_id"),
  lastPostCreatedAt: (0, import_pg_core2.date)("last_post_created_at"),
  lastPosterUsername: (0, import_pg_core2.varchar)("last_poster_username"),
  lastPosterId: (0, import_pg_core2.integer)("last_poster_id"),
  views: (0, import_pg_core2.integer)("views").notNull().default(0),
  replies: (0, import_pg_core2.integer)("replies").notNull().default(0),
  isClosed: (0, import_pg_core2.boolean)("is_closed").notNull().default(false),
  isSticky: (0, import_pg_core2.boolean)("is_sticky").notNull().default(false),
  ratingsNumber: (0, import_pg_core2.integer)("ratings_number").notNull().default(0),
  ratingsTotal: (0, import_pg_core2.integer)("ratings_total").notNull().default(0),
  moderatorNotes: (0, import_pg_core2.varchar)("moderator_notes"),
  isDraft: (0, import_pg_core2.boolean)("is_draft").notNull().default(false),
  isApproved: (0, import_pg_core2.boolean)("is_approved").notNull().default(true),
  unapprovedPostsTotal: (0, import_pg_core2.integer)("unapproved_posts_total").notNull().default(0),
  attachmentTotal: (0, import_pg_core2.integer)("attachment_total").notNull().default(0),
  isDeleted: (0, import_pg_core2.boolean)("is_deleted").notNull().default(false),
  deletedAt: (0, import_pg_core2.timestamp)("deleted_at")
});

// src/repositories/forum.ts
var import_drizzle_orm2 = require("drizzle-orm");
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
    const forums = await this.db.select().from(this.schema.forums).where((0, import_drizzle_orm2.eq)(forumsTable.id, id));
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
var import_drizzle_orm3 = require("drizzle-orm");
var DrizzleThreadRepository = class {
  db;
  schema;
  constructor(db, schema) {
    this.db = db;
    this.schema = schema;
  }
  async getAllThreadsInForum(forumId) {
    const threadsTable = this.schema.threads;
    const threads = await this.db.select().from(threadsTable).where((0, import_drizzle_orm3.eq)(threadsTable.forumId, forumId));
    return threads.map((thread) => this.mapDbThreadToThread(thread));
  }
  async getThreadById(threadId) {
    const threadsTable = this.schema.threads;
    const threads = await this.db.select().from(threadsTable).where((0, import_drizzle_orm3.eq)(threadsTable.id, threadId));
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
  return (0, import_core.createForumAdapter)({
    forum: forumRepo,
    thread: threadRepo
  });
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  defaultSchema,
  drizzlePgAdapter
});
//# sourceMappingURL=index.js.map