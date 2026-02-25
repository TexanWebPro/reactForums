"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc2) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc2 = __getOwnPropDesc(from, key)) || desc2.enumerable });
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

// src/schema/user.ts
var import_drizzle_orm = require("drizzle-orm");
var import_pg_core = require("drizzle-orm/pg-core");
var userSchema = (0, import_pg_core.pgTable)("rf_users", {
  id: (0, import_pg_core.serial)("id").primaryKey().notNull(),
  username: (0, import_pg_core.varchar)("username").notNull().unique(),
  password: (0, import_pg_core.varchar)("password").notNull(),
  email: (0, import_pg_core.varchar)("email").notNull().unique(),
  role: (0, import_pg_core.varchar)("role").notNull().default("user"),
  avatar: (0, import_pg_core.varchar)("avatar").notNull().default("/default-avatar.jpg"),
  userTitle: (0, import_pg_core.varchar)("user_title"),
  website: (0, import_pg_core.varchar)("website"),
  birthday: (0, import_pg_core.varchar)("birthday"),
  signature: (0, import_pg_core.varchar)("signature"),
  postCount: (0, import_pg_core.integer)().notNull().default(0),
  threadCount: (0, import_pg_core.integer)().notNull().default(0),
  reputation: (0, import_pg_core.integer)().notNull().default(0),
  warningPoints: (0, import_pg_core.integer)().notNull().default(0),
  primaryUserGroup: (0, import_pg_core.varchar)("primary_user_group").notNull().default("User"),
  registrationDate: (0, import_pg_core.timestamp)("registration_date").default(import_drizzle_orm.sql`CURRENT_TIMESTAMP`).notNull(),
  lastActive: (0, import_pg_core.timestamp)("last_active").default(import_drizzle_orm.sql`CURRENT_TIMESTAMP`).notNull(),
  lastVisit: (0, import_pg_core.timestamp)("last_visit").default(import_drizzle_orm.sql`CURRENT_TIMESTAMP`).notNull(),
  lastPost: (0, import_pg_core.timestamp)("last_post"),
  allowMessages: (0, import_pg_core.boolean)("allow_messages").notNull().default(true),
  allowMessagesFromFriendsOnly: (0, import_pg_core.boolean)("allow_messages_from_friends_only").notNull().default(false),
  showBirthday: (0, import_pg_core.boolean)("show_birthday").notNull().default(true),
  showSignatures: (0, import_pg_core.boolean)("show_signatures").notNull().default(true),
  showAvatars: (0, import_pg_core.boolean)("show_avatars").notNull().default(true),
  showQuickReply: (0, import_pg_core.boolean)("show_quick_reply").notNull().default(true),
  isAway: (0, import_pg_core.boolean)("is_away").notNull().default(false),
  awayReason: (0, import_pg_core.varchar)("away_reason"),
  postsPerPage: (0, import_pg_core.integer)("posts_per_page").notNull().default(10),
  threadsPerPage: (0, import_pg_core.integer)("threads_per_page").notNull().default(10),
  timezone: (0, import_pg_core.varchar)("timezone").notNull().default("CST"),
  language: (0, import_pg_core.varchar)("language"),
  totalTimeOnline: (0, import_pg_core.integer)("total_time_online").notNull().default(0),
  registrationIp: (0, import_pg_core.varchar)("registration_ip").notNull(),
  lastIp: (0, import_pg_core.varchar)("last_ip").notNull(),
  failedLogins: (0, import_pg_core.integer)("failed_logins").notNull().default(0),
  updatedDate: (0, import_pg_core.timestamp)("updated_date").default(import_drizzle_orm.sql`CURRENT_TIMESTAMP`).notNull()
});

// src/schema/forum.ts
var import_pg_core2 = require("drizzle-orm/pg-core");
var forumSchema = (0, import_pg_core2.pgTable)("rf_forums", {
  id: (0, import_pg_core2.serial)("id").primaryKey().notNull(),
  isCategory: (0, import_pg_core2.boolean)("is_category").notNull(),
  parentForumId: (0, import_pg_core2.integer)("parent_forum_id"),
  name: (0, import_pg_core2.text)("name").notNull(),
  description: (0, import_pg_core2.text)("description").notNull(),
  linkTo: (0, import_pg_core2.text)("link_to"),
  password: (0, import_pg_core2.text)("password"),
  displayOrder: (0, import_pg_core2.integer)("display_order").notNull(),
  threadCount: (0, import_pg_core2.integer)("thread_count").notNull(),
  postCount: (0, import_pg_core2.integer)("post_count").notNull(),
  lastPostTime: (0, import_pg_core2.date)("last_post_time"),
  lastPostAuthor: (0, import_pg_core2.text)("last_post_author"),
  // lastPostAuthor: "uuid", // user ID
  lastPostThreadId: (0, import_pg_core2.integer)("last_post_thread_id"),
  lastPostThreadSubject: (0, import_pg_core2.text)("last_post_thread_subject"),
  rulesTitle: (0, import_pg_core2.text)("rules_title"),
  rules: (0, import_pg_core2.text)("rules"),
  unapprovedThreadCount: (0, import_pg_core2.integer)("unapproved_thread_count").notNull().default(0),
  unapprovedPostCount: (0, import_pg_core2.integer)("unapproved_post_count").notNull().default(0),
  isActive: (0, import_pg_core2.boolean)("is_active").notNull().default(false),
  isLocked: (0, import_pg_core2.boolean)("is_locked").notNull().default(false),
  allowRatings: (0, import_pg_core2.boolean)("allow_ratings").notNull().default(true),
  usePostCounts: (0, import_pg_core2.boolean)("user_post_counts").notNull().default(true),
  mustReviewPosts: (0, import_pg_core2.boolean)("must_review_posts").notNull().default(false),
  mustReviewThreads: (0, import_pg_core2.boolean)("must_review_threads").notNull().default(false),
  mustReviewAttachments: (0, import_pg_core2.boolean)("must_review_attachments").notNull().default(false),
  canModsEdit: (0, import_pg_core2.boolean)("can_mods_edits").notNull().default(true)
});

// src/schema/thread.ts
var import_drizzle_orm2 = require("drizzle-orm");
var import_pg_core3 = require("drizzle-orm/pg-core");
var threadSchema = (0, import_pg_core3.pgTable)("rf_threads", {
  id: (0, import_pg_core3.serial)("id").primaryKey().notNull(),
  forumId: (0, import_pg_core3.integer)("forum_id").notNull().references(() => forumSchema.id),
  subject: (0, import_pg_core3.varchar)("subject").notNull(),
  prefixId: (0, import_pg_core3.varchar)("prefix_id"),
  iconId: (0, import_pg_core3.varchar)("icon_id"),
  pollId: (0, import_pg_core3.varchar)("poll_id"),
  userId: (0, import_pg_core3.integer)("user_id").notNull(),
  // add reference later
  username: (0, import_pg_core3.varchar)("username").notNull(),
  createdAt: (0, import_pg_core3.timestamp)("created_at").default(import_drizzle_orm2.sql`CURRENT_TIMESTAMP`).notNull(),
  updatedAt: (0, import_pg_core3.timestamp)("updated_at").default(import_drizzle_orm2.sql`CURRENT_TIMESTAMP`).notNull(),
  firstPostId: (0, import_pg_core3.integer)("first_post_id"),
  lastPostCreatedAt: (0, import_pg_core3.date)("last_post_created_at"),
  lastPosterUsername: (0, import_pg_core3.varchar)("last_poster_username"),
  lastPosterId: (0, import_pg_core3.integer)("last_poster_id"),
  views: (0, import_pg_core3.integer)("views").notNull().default(0),
  replies: (0, import_pg_core3.integer)("replies").notNull().default(0),
  isClosed: (0, import_pg_core3.boolean)("is_closed").notNull().default(false),
  isSticky: (0, import_pg_core3.boolean)("is_sticky").notNull().default(false),
  ratingsNumber: (0, import_pg_core3.integer)("ratings_number").notNull().default(0),
  ratingsTotal: (0, import_pg_core3.integer)("ratings_total").notNull().default(0),
  moderatorNotes: (0, import_pg_core3.varchar)("moderator_notes"),
  isDraft: (0, import_pg_core3.boolean)("is_draft").notNull().default(false),
  isApproved: (0, import_pg_core3.boolean)("is_approved").notNull().default(true),
  unapprovedPostsTotal: (0, import_pg_core3.integer)("unapproved_posts_total").notNull().default(0),
  attachmentTotal: (0, import_pg_core3.integer)("attachment_total").notNull().default(0),
  isDeleted: (0, import_pg_core3.boolean)("is_deleted").notNull().default(false),
  deletedAt: (0, import_pg_core3.timestamp)("deleted_at")
});

// src/repositories/forum.ts
var import_drizzle_orm3 = require("drizzle-orm");
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
    const forums = await this.db.select().from(this.schema.forums).where((0, import_drizzle_orm3.eq)(forumsTable.id, id));
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
var import_drizzle_orm4 = require("drizzle-orm");
var DrizzleThreadRepository = class {
  db;
  schema;
  constructor(db, schema) {
    this.db = db;
    this.schema = schema;
  }
  async getAllThreadsInForum(forumId, limit) {
    const threadsTable = this.schema.threads;
    const threads = await this.db.select().from(threadsTable).where((0, import_drizzle_orm4.eq)(threadsTable.forumId, forumId)).limit(limit);
    return threads.map((thread) => this.mapDbThreadToThread(thread));
  }
  async getThreadById(threadId) {
    const threadsTable = this.schema.threads;
    const threads = await this.db.select().from(threadsTable).where((0, import_drizzle_orm4.eq)(threadsTable.id, threadId));
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

// src/repositories/user.ts
var import_drizzle_orm5 = require("drizzle-orm");
var DrizzleUserRepository = class {
  db;
  schema;
  constructor(db, schema) {
    this.db = db;
    this.schema = schema;
  }
  async getAllUsers() {
    const usersTable = this.schema.users;
    const users = await this.db.select().from(usersTable);
    return users;
  }
  async getLatestUser() {
    const usersTable = this.schema.users;
    const user = await this.db.select().from(usersTable).orderBy((0, import_drizzle_orm5.desc)(usersTable.registrationDate), (0, import_drizzle_orm5.desc)(usersTable.id)).limit(1);
    return user[0];
  }
  async getUserById(id) {
    const usersTable = this.schema.users;
    const user = await this.db.select().from(usersTable).where((0, import_drizzle_orm5.eq)(usersTable.id, id));
    return user[0];
  }
  async getUserByUsername(username) {
    const usersTable = this.schema.users;
    const user = await this.db.select().from(usersTable).where((0, import_drizzle_orm5.eq)(usersTable.username, username));
    return user[0];
  }
  //   getCustomProfileFieldsByUserId(
  //     id: number,
  //   ): Promise<CustomProfileFieldsValue[]> {}
  //   getUserReputations(userId: number): Promise<Reputations> {}
};

// src/index.ts
var defaultSchema = {
  users: userSchema,
  forums: forumSchema,
  threads: threadSchema
};
function drizzlePgAdapter(options) {
  const { db } = options;
  const schema = options.schema ?? defaultSchema;
  const userRepo = new DrizzleUserRepository(db, schema);
  const forumRepo = new DrizzleForumRepository(db, schema);
  const threadRepo = new DrizzleThreadRepository(db, schema);
  return (0, import_core.createForumAdapter)({
    user: userRepo,
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