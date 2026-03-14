// src/schema/setting.ts
import { integer, pgTable, serial, varchar } from "drizzle-orm/pg-core";
var settingSchema = pgTable("rf_settings", {
  id: serial("id").primaryKey().notNull(),
  name: varchar("name").notNull().unique(),
  title: varchar("title").notNull(),
  value: varchar("value").notNull(),
  description: varchar("description").notNull(),
  optionsCode: varchar("options_code").notNull(),
  groupId: integer("groupd_id").notNull(),
  displayOrder: integer("display_order").notNull()
});

// src/schema/user.ts
import { sql } from "drizzle-orm";
import {
  boolean,
  integer as integer2,
  pgTable as pgTable2,
  serial as serial2,
  timestamp,
  varchar as varchar2
} from "drizzle-orm/pg-core";
var userSchema = pgTable2("rf_users", {
  id: serial2("id").primaryKey().notNull(),
  username: varchar2("username").notNull().unique(),
  password: varchar2("password").notNull(),
  email: varchar2("email").notNull().unique(),
  role: varchar2("role").notNull().default("user"),
  avatar: varchar2("avatar").notNull().default("/default-avatar.jpg"),
  userTitle: varchar2("user_title"),
  website: varchar2("website"),
  birthday: varchar2("birthday"),
  signature: varchar2("signature"),
  postCount: integer2().notNull().default(0),
  threadCount: integer2().notNull().default(0),
  reputation: integer2().notNull().default(0),
  warningPoints: integer2().notNull().default(0),
  primaryUserGroup: varchar2("primary_user_group").notNull().default("User"),
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
  awayReason: varchar2("away_reason"),
  postsPerPage: integer2("posts_per_page").notNull().default(10),
  threadsPerPage: integer2("threads_per_page").notNull().default(10),
  timezone: varchar2("timezone").notNull().default("CST"),
  language: varchar2("language"),
  totalTimeOnline: integer2("total_time_online").notNull().default(0),
  registrationIp: varchar2("registration_ip").notNull(),
  lastIp: varchar2("last_ip").notNull(),
  failedLogins: integer2("failed_logins").notNull().default(0),
  updatedDate: timestamp("updated_date").default(sql`CURRENT_TIMESTAMP`).notNull()
});

// src/schema/forum.ts
import {
  boolean as boolean2,
  date,
  integer as integer3,
  pgTable as pgTable3,
  serial as serial3,
  text
} from "drizzle-orm/pg-core";
var forumSchema = pgTable3("rf_forums", {
  id: serial3("id").primaryKey().notNull(),
  isCategory: boolean2("is_category").notNull(),
  parentForumId: integer3("parent_forum_id"),
  name: text("name").notNull(),
  description: text("description").notNull(),
  linkTo: text("link_to"),
  password: text("password"),
  displayOrder: integer3("display_order").notNull().default(0),
  threadCount: integer3("thread_count").notNull().default(0),
  postCount: integer3("post_count").notNull().default(0),
  lastPostTime: date("last_post_time"),
  lastPostAuthor: text("last_post_author"),
  // lastPostAuthor: "uuid", // user ID
  lastPostThreadId: integer3("last_post_thread_id"),
  lastPostThreadSubject: text("last_post_thread_subject"),
  rulesTitle: text("rules_title"),
  rules: text("rules"),
  unapprovedThreadCount: integer3("unapproved_thread_count").notNull().default(0),
  unapprovedPostCount: integer3("unapproved_post_count").notNull().default(0),
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
  integer as integer4,
  pgTable as pgTable4,
  serial as serial4,
  timestamp as timestamp2,
  varchar as varchar3
} from "drizzle-orm/pg-core";
var threadSchema = pgTable4("rf_threads", {
  id: serial4("id").primaryKey().notNull(),
  forumId: integer4("forum_id").notNull().references(() => forumSchema.id),
  subject: varchar3("subject").notNull(),
  prefixId: varchar3("prefix_id"),
  iconId: varchar3("icon_id"),
  pollId: varchar3("poll_id"),
  userId: integer4("user_id").notNull(),
  // add reference later
  username: varchar3("username").notNull(),
  createdAt: timestamp2("created_at").default(sql2`CURRENT_TIMESTAMP`).notNull(),
  updatedAt: timestamp2("updated_at").default(sql2`CURRENT_TIMESTAMP`).notNull(),
  firstPostId: integer4("first_post_id"),
  lastPostCreatedAt: date2("last_post_created_at"),
  lastPosterUsername: varchar3("last_poster_username"),
  lastPosterId: integer4("last_poster_id"),
  views: integer4("views").notNull().default(0),
  replies: integer4("replies").notNull().default(0),
  isClosed: boolean3("is_closed").notNull().default(false),
  isSticky: boolean3("is_sticky").notNull().default(false),
  ratingsNumber: integer4("ratings_number").notNull().default(0),
  ratingsTotal: integer4("ratings_total").notNull().default(0),
  moderatorNotes: varchar3("moderator_notes"),
  isDraft: boolean3("is_draft").notNull().default(false),
  isApproved: boolean3("is_approved").notNull().default(true),
  unapprovedPostsTotal: integer4("unapproved_posts_total").notNull().default(0),
  attachmentTotal: integer4("attachment_total").notNull().default(0),
  isDeleted: boolean3("is_deleted").notNull().default(false),
  deletedAt: timestamp2("deleted_at")
});

// src/schema/post.ts
import { sql as sql3 } from "drizzle-orm";
import {
  boolean as boolean4,
  integer as integer5,
  pgTable as pgTable5,
  serial as serial5,
  timestamp as timestamp3,
  varchar as varchar4
} from "drizzle-orm/pg-core";
var postSchema = pgTable5("rf_posts", {
  id: serial5("id").primaryKey().notNull(),
  threadId: integer5("thread_id").notNull().references(() => threadSchema.id),
  parentPostId: integer5("parent_post_id"),
  forumId: integer5("forum_id").notNull().references(() => forumSchema.id),
  subject: varchar4("subject"),
  iconId: varchar4("icon_id"),
  userId: integer5("user_id").notNull().references(() => userSchema.id),
  username: varchar4("username").notNull(),
  createdAt: timestamp3("created_at").default(sql3`CURRENT_TIMESTAMP`).notNull(),
  editUserId: integer5("edit_user_id").references(() => userSchema.id),
  updatedAt: timestamp3("updated_at").default(sql3`CURRENT_TIMESTAMP`).notNull(),
  isDraft: boolean4("is_draft").notNull().default(false),
  isApproved: boolean4("is_approved").notNull().default(true),
  content: varchar4("content").notNull(),
  ipAddress: varchar4("ip_address").notNull(),
  longIpAddress: varchar4("long_ip_address").notNull(),
  includeSignature: boolean4("include_signature").notNull().default(true),
  isDeleted: boolean4("is_deleted").notNull().default(false),
  deletedAt: timestamp3("deleted_at")
});
export {
  forumSchema,
  postSchema,
  settingSchema,
  threadSchema,
  userSchema
};
//# sourceMappingURL=index.mjs.map