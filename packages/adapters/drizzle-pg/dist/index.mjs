// src/index.ts
import { createForumAdapter } from "@reactforums/core";

// src/schema/user.ts
import { sql } from "drizzle-orm";
import {
  boolean,
  integer,
  pgTable,
  serial,
  timestamp,
  varchar
} from "drizzle-orm/pg-core";
var userSchema = pgTable("rf_users", {
  id: serial("id").primaryKey().notNull(),
  username: varchar("username").notNull().unique(),
  password: varchar("password").notNull(),
  email: varchar("email").notNull().unique(),
  role: varchar("role").notNull().default("user"),
  avatar: varchar("avatar").notNull().default("/default-avatar.jpg"),
  userTitle: varchar("user_title"),
  website: varchar("website"),
  birthday: varchar("birthday"),
  signature: varchar("signature"),
  postCount: integer().notNull().default(0),
  threadCount: integer().notNull().default(0),
  reputation: integer().notNull().default(0),
  warningPoints: integer().notNull().default(0),
  primaryUserGroup: varchar("primary_user_group").notNull().default("User"),
  registrationDate: timestamp("registration_date").default(sql`CURRENT_TIMESTAMP`).notNull(),
  lastActive: timestamp("last_active").default(sql`CURRENT_TIMESTAMP`).notNull(),
  lastVisit: timestamp("last_visit").default(sql`CURRENT_TIMESTAMP`).notNull(),
  lastPost: timestamp("last_post"),
  allowMessages: boolean("allow_messages").notNull().default(true),
  allowMessagesFromFriendsOnly: boolean("allow_messages_from_friends_only").notNull().default(false),
  showBirthday: boolean("show_birthday").notNull().default(true),
  showSignatures: boolean("show_signatures").notNull().default(true),
  showAvatars: boolean("show_avatars").notNull().default(true),
  showQuickReply: boolean("show_quick_reply").notNull().default(true),
  isAway: boolean("is_away").notNull().default(false),
  awayReason: varchar("away_reason"),
  postsPerPage: integer("posts_per_page").notNull().default(10),
  threadsPerPage: integer("threads_per_page").notNull().default(10),
  timezone: varchar("timezone").notNull().default("CST"),
  language: varchar("language"),
  totalTimeOnline: integer("total_time_online").notNull().default(0),
  registrationIp: varchar("registration_ip").notNull(),
  lastIp: varchar("last_ip").notNull(),
  failedLogins: integer("failed_logins").notNull().default(0),
  updatedDate: timestamp("updated_date").default(sql`CURRENT_TIMESTAMP`).notNull()
});

// src/schema/forum.ts
import {
  boolean as boolean2,
  date,
  integer as integer2,
  pgTable as pgTable2,
  serial as serial2,
  text
} from "drizzle-orm/pg-core";
var forumSchema = pgTable2("rf_forums", {
  id: serial2("id").primaryKey().notNull(),
  isCategory: boolean2("is_category").notNull(),
  parentForumId: integer2("parent_forum_id"),
  name: text("name").notNull(),
  description: text("description").notNull(),
  linkTo: text("link_to"),
  password: text("password"),
  displayOrder: integer2("display_order").notNull(),
  threadCount: integer2("thread_count").notNull(),
  postCount: integer2("post_count").notNull(),
  lastPostTime: date("last_post_time"),
  lastPostAuthor: text("last_post_author"),
  // lastPostAuthor: "uuid", // user ID
  lastPostThreadId: integer2("last_post_thread_id"),
  lastPostThreadSubject: text("last_post_thread_subject"),
  rulesTitle: text("rules_title"),
  rules: text("rules"),
  unapprovedThreadCount: integer2("unapproved_thread_count").notNull().default(0),
  unapprovedPostCount: integer2("unapproved_post_count").notNull().default(0),
  isActive: boolean2("is_active").notNull().default(false),
  isLocked: boolean2("is_locked").notNull().default(false),
  allowRatings: boolean2("allow_ratings").notNull().default(true),
  usePostCounts: boolean2("user_post_counts").notNull().default(true),
  mustReviewPosts: boolean2("must_review_posts").notNull().default(false),
  mustReviewThreads: boolean2("must_review_threads").notNull().default(false),
  mustReviewAttachments: boolean2("must_review_attachments").notNull().default(false),
  canModsEdit: boolean2("can_mods_edits").notNull().default(true)
});

// src/schema/thread.ts
import { sql as sql2 } from "drizzle-orm";
import {
  boolean as boolean3,
  date as date2,
  integer as integer3,
  pgTable as pgTable3,
  serial as serial3,
  timestamp as timestamp2,
  varchar as varchar2
} from "drizzle-orm/pg-core";
var threadSchema = pgTable3("rf_threads", {
  id: serial3("id").primaryKey().notNull(),
  forumId: integer3("forum_id").notNull().references(() => forumSchema.id),
  subject: varchar2("subject").notNull(),
  prefixId: varchar2("prefix_id"),
  iconId: varchar2("icon_id"),
  pollId: varchar2("poll_id"),
  userId: integer3("user_id").notNull(),
  // add reference later
  username: varchar2("username").notNull(),
  createdAt: timestamp2("created_at").default(sql2`CURRENT_TIMESTAMP`).notNull(),
  updatedAt: timestamp2("updated_at").default(sql2`CURRENT_TIMESTAMP`).notNull(),
  firstPostId: integer3("first_post_id"),
  lastPostCreatedAt: date2("last_post_created_at"),
  lastPosterUsername: varchar2("last_poster_username"),
  lastPosterId: integer3("last_poster_id"),
  views: integer3("views").notNull().default(0),
  replies: integer3("replies").notNull().default(0),
  isClosed: boolean3("is_closed").notNull().default(false),
  isSticky: boolean3("is_sticky").notNull().default(false),
  ratingsNumber: integer3("ratings_number").notNull().default(0),
  ratingsTotal: integer3("ratings_total").notNull().default(0),
  moderatorNotes: varchar2("moderator_notes"),
  isDraft: boolean3("is_draft").notNull().default(false),
  isApproved: boolean3("is_approved").notNull().default(true),
  unapprovedPostsTotal: integer3("unapproved_posts_total").notNull().default(0),
  attachmentTotal: integer3("attachment_total").notNull().default(0),
  isDeleted: boolean3("is_deleted").notNull().default(false),
  deletedAt: timestamp2("deleted_at")
});

// src/schema/setting.ts
import { integer as integer4, pgTable as pgTable4, serial as serial4, varchar as varchar3 } from "drizzle-orm/pg-core";
var settingSchema = pgTable4("rf_settings", {
  id: serial4("id").primaryKey().notNull(),
  name: varchar3("name").notNull().unique(),
  title: varchar3("title").notNull(),
  value: varchar3("value").notNull(),
  description: varchar3("description").notNull(),
  optionsCode: varchar3("options_code").notNull(),
  groupId: integer4("groupd_id").notNull(),
  displayOrder: integer4("display_order").notNull()
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
  async getAllThreadsInForum(forumId, limit) {
    const threadsTable = this.schema.threads;
    const threads = await this.db.select().from(threadsTable).where(eq2(threadsTable.forumId, forumId)).limit(limit);
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

// src/repositories/user.ts
import { desc, eq as eq3 } from "drizzle-orm";
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
    const user = await this.db.select().from(usersTable).orderBy(desc(usersTable.registrationDate), desc(usersTable.id)).limit(1);
    return user[0];
  }
  async getUserById(id) {
    const usersTable = this.schema.users;
    const user = await this.db.select().from(usersTable).where(eq3(usersTable.id, id));
    return user[0];
  }
  async getUserByUsername(username) {
    const usersTable = this.schema.users;
    const user = await this.db.select().from(usersTable).where(eq3(usersTable.username, username));
    return user[0];
  }
  //   getCustomProfileFieldsByUserId(
  //     id: number,
  //   ): Promise<CustomProfileFieldsValue[]> {}
  //   getUserReputations(userId: number): Promise<Reputations> {}
};

// src/repositories/setting.ts
import { eq as eq4 } from "drizzle-orm";
var DrizzleSettingRepository = class {
  db;
  schema;
  constructor(db, schema) {
    this.db = db;
    this.schema = schema;
  }
  async getAllSettings() {
    const settingsTable = this.schema.settings;
    const allSettings = await this.db.select().from(settingsTable);
    return allSettings.map((setting) => {
      return this.mapDbSettingToSetting(setting);
    });
  }
  async getSettingByName(name) {
    const settingsTable = this.schema.settings;
    const settings = await this.db.select().from(settingsTable).where(eq4(settingsTable.name, name));
    const setting = settings[0];
    if (!setting) return;
    return this.mapDbSettingToSetting(setting);
  }
  mapDbSettingToSetting(setting) {
    return {
      ...setting,
      name: setting.name,
      optionsCode: setting.optionsCode
    };
  }
};

// src/index.ts
var defaultSchema = {
  settings: settingSchema,
  users: userSchema,
  forums: forumSchema,
  threads: threadSchema
};
function drizzlePgAdapter(options) {
  const { db } = options;
  const schema = options.schema ?? defaultSchema;
  const settingRepo = new DrizzleSettingRepository(db, schema);
  const userRepo = new DrizzleUserRepository(db, schema);
  const forumRepo = new DrizzleForumRepository(db, schema);
  const threadRepo = new DrizzleThreadRepository(db, schema);
  return createForumAdapter({
    setting: settingRepo,
    user: userRepo,
    forum: forumRepo,
    thread: threadRepo
  });
}
export {
  defaultSchema,
  drizzlePgAdapter
};
//# sourceMappingURL=index.mjs.map