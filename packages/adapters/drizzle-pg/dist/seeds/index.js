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

// src/seeds/index.ts
var seeds_exports = {};
__export(seeds_exports, {
  seedCore: () => seedCore,
  seedForums: () => seedForums,
  seedSettings: () => seedSettings,
  seedThreads: () => seedThreads
});
module.exports = __toCommonJS(seeds_exports);

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

// src/schema/setting.ts
var import_pg_core4 = require("drizzle-orm/pg-core");
var settingSchema = (0, import_pg_core4.pgTable)("rf_settings", {
  id: (0, import_pg_core4.serial)("id").primaryKey().notNull(),
  name: (0, import_pg_core4.varchar)("name").notNull().unique(),
  title: (0, import_pg_core4.varchar)("title").notNull(),
  value: (0, import_pg_core4.varchar)("value").notNull(),
  description: (0, import_pg_core4.varchar)("description").notNull(),
  optionsCode: (0, import_pg_core4.varchar)("options_code").notNull(),
  groupId: (0, import_pg_core4.integer)("groupd_id").notNull(),
  displayOrder: (0, import_pg_core4.integer)("display_order").notNull()
});

// src/seeds/forums.ts
async function seedForums(db) {
  const existing = await db.select({ id: forumSchema.id }).from(forumSchema).limit(1);
  if (existing.length > 0) {
    return;
  }
  forumData.map(async (forum) => {
    await db.insert(forumSchema).values({
      isCategory: forum.isCategory,
      parentForumId: forum.parentForumId,
      name: forum.name,
      description: forum.description,
      linkTo: forum.linkTo,
      password: forum.password,
      displayOrder: forum.displayOrder,
      threadCount: forum.threadCount,
      postCount: forum.postCount,
      lastPostTime: forum.lastPostTime.toISOString(),
      lastPostAuthor: forum.lastPostAuthor,
      lastPostThreadId: forum.lastPostThreadId,
      lastPostThreadSubject: forum.lastPostThreadSubject,
      rulesTitle: forum.rulesTitle,
      rules: forum.rules,
      unapprovedThreadCount: forum.unapprovedThreadCount,
      unapprovedPostCount: forum.unapprovedPostCount,
      isActive: forum.isActive,
      isLocked: forum.isLocked,
      allowRatings: forum.allowRatings,
      usePostCounts: forum.usePostCounts,
      mustReviewPosts: forum.mustReviewPosts,
      mustReviewThreads: forum.mustReviewThreads,
      mustReviewAttachments: forum.mustReviewAttachments,
      canModsEdit: forum.canModsEdit
    });
  });
}
var forumData = [
  {
    id: 1,
    isCategory: true,
    parentForumId: null,
    name: "Category One",
    description: "The first category",
    linkTo: null,
    password: null,
    displayOrder: 0,
    threadCount: 1,
    postCount: 10,
    lastPostTime: /* @__PURE__ */ new Date(),
    lastPostAuthor: "uuid",
    // user ID
    lastPostThreadId: 1,
    lastPostThreadSubject: "Latest Thread Subject",
    rulesTitle: "Category Rules",
    rules: "Rules go here.",
    unapprovedThreadCount: 6,
    unapprovedPostCount: 15,
    isActive: true,
    isLocked: false,
    allowRatings: true,
    usePostCounts: true,
    mustReviewPosts: false,
    mustReviewThreads: false,
    mustReviewAttachments: false,
    canModsEdit: true
  },
  {
    id: 2,
    isCategory: false,
    parentForumId: 1,
    name: "Forum One",
    description: "The first forum",
    linkTo: null,
    password: null,
    displayOrder: 0,
    threadCount: 1,
    postCount: 10,
    lastPostTime: /* @__PURE__ */ new Date(),
    lastPostAuthor: "uuid",
    // user ID
    lastPostThreadId: 1,
    lastPostThreadSubject: "Latest Thread Subject",
    rulesTitle: "Forum One Rules",
    rules: "Rules go here.",
    unapprovedThreadCount: 6,
    unapprovedPostCount: 15,
    isActive: true,
    isLocked: false,
    allowRatings: true,
    usePostCounts: true,
    mustReviewPosts: false,
    mustReviewThreads: false,
    mustReviewAttachments: false,
    canModsEdit: true
  },
  {
    id: 3,
    isCategory: false,
    parentForumId: 1,
    name: "Forum Two",
    description: "The second forum",
    linkTo: null,
    password: null,
    displayOrder: 0,
    threadCount: 15,
    postCount: 130,
    lastPostTime: /* @__PURE__ */ new Date(),
    lastPostAuthor: "uuid",
    // user ID
    lastPostThreadId: 1,
    lastPostThreadSubject: "Latest Thread Subject",
    rulesTitle: "Forum Two Rules",
    rules: "Rules go here.",
    unapprovedThreadCount: 6,
    unapprovedPostCount: 15,
    isActive: true,
    isLocked: true,
    allowRatings: true,
    usePostCounts: true,
    mustReviewPosts: false,
    mustReviewThreads: false,
    mustReviewAttachments: false,
    canModsEdit: true
  },
  {
    id: 4,
    isCategory: false,
    parentForumId: 3,
    name: "Child Forum One",
    description: "The first child forum",
    linkTo: null,
    password: null,
    displayOrder: 0,
    threadCount: 15,
    postCount: 130,
    lastPostTime: /* @__PURE__ */ new Date(),
    lastPostAuthor: "uuid",
    // user ID
    lastPostThreadId: 1,
    lastPostThreadSubject: "Latest Thread Subject",
    rulesTitle: "Forum Two Rules",
    rules: "Rules go here.",
    unapprovedThreadCount: 6,
    unapprovedPostCount: 15,
    isActive: true,
    isLocked: true,
    allowRatings: true,
    usePostCounts: true,
    mustReviewPosts: false,
    mustReviewThreads: false,
    mustReviewAttachments: false,
    canModsEdit: true
  },
  {
    id: 5,
    isCategory: false,
    parentForumId: 3,
    name: "Child Forum Two",
    description: "The second child forum",
    linkTo: null,
    password: null,
    displayOrder: 0,
    threadCount: 15,
    postCount: 130,
    lastPostTime: /* @__PURE__ */ new Date(),
    lastPostAuthor: "uuid",
    // user ID
    lastPostThreadId: 1,
    lastPostThreadSubject: "Latest Thread Subject",
    rulesTitle: "Forum Two Rules",
    rules: "Rules go here.",
    unapprovedThreadCount: 6,
    unapprovedPostCount: 15,
    isActive: true,
    isLocked: false,
    allowRatings: true,
    usePostCounts: true,
    mustReviewPosts: false,
    mustReviewThreads: false,
    mustReviewAttachments: false,
    canModsEdit: true
  },
  {
    id: 6,
    isCategory: false,
    parentForumId: 3,
    name: "Child Forum Three",
    description: "The third child forum",
    linkTo: null,
    password: null,
    displayOrder: 0,
    threadCount: 15,
    postCount: 130,
    lastPostTime: /* @__PURE__ */ new Date(),
    lastPostAuthor: "uuid",
    // user ID
    lastPostThreadId: 1,
    lastPostThreadSubject: "Latest Thread Subject",
    rulesTitle: "Forum Two Rules",
    rules: "Rules go here.",
    unapprovedThreadCount: 6,
    unapprovedPostCount: 15,
    isActive: true,
    isLocked: false,
    allowRatings: true,
    usePostCounts: true,
    mustReviewPosts: false,
    mustReviewThreads: false,
    mustReviewAttachments: false,
    canModsEdit: true
  },
  {
    id: 7,
    isCategory: false,
    parentForumId: 3,
    name: "Child Forum Four",
    description: "The fourth child forum",
    linkTo: null,
    password: null,
    displayOrder: 0,
    threadCount: 15,
    postCount: 130,
    lastPostTime: /* @__PURE__ */ new Date(),
    lastPostAuthor: "uuid",
    // user ID
    lastPostThreadId: 1,
    lastPostThreadSubject: "Latest Thread Subject",
    rulesTitle: "Forum Two Rules",
    rules: "Rules go here.",
    unapprovedThreadCount: 6,
    unapprovedPostCount: 15,
    isActive: true,
    isLocked: false,
    allowRatings: true,
    usePostCounts: true,
    mustReviewPosts: false,
    mustReviewThreads: false,
    mustReviewAttachments: false,
    canModsEdit: true
  }
];

// src/seeds/threads.ts
async function seedThreads(db) {
  const existing = await db.select({ id: threadSchema.id }).from(threadSchema).limit(1);
  if (existing.length > 0) {
    return;
  }
  threadData.map(async (thread) => {
    await db.insert(threadSchema).values({
      forumId: thread.forumId,
      subject: thread.subject,
      prefixId: thread.prefix,
      iconId: thread.icon,
      pollId: thread.pollId,
      userId: thread.userId,
      username: thread.username,
      lastPostCreatedAt: thread.lastPostCreatedAt.toISOString(),
      firstPostId: thread.firstPostId,
      lastPosterId: thread.lastPosterId,
      lastPosterUsername: thread.lastPosterUsername,
      views: thread.views,
      replies: thread.replies,
      isClosed: thread.isClosed,
      isSticky: thread.isSticky,
      ratingsNumber: thread.ratingsNumber,
      ratingsTotal: thread.ratingsTotal,
      moderatorNotes: thread.moderatorNotes,
      isDraft: thread.isDraft,
      isApproved: thread.isApproved,
      unapprovedPostsTotal: thread.unapprovedPostsTotal,
      attachmentTotal: thread.attachmentTotal,
      isDeleted: thread.isDeleted,
      deletedAt: thread.deletedAt
    });
  });
}
var threadData = [
  {
    id: 1,
    forumId: 2,
    subject: "First Thread",
    prefix: "",
    icon: "",
    pollId: null,
    userId: 1,
    username: "Elegant Totality",
    firstPostId: 1,
    lastPostCreatedAt: /* @__PURE__ */ new Date(),
    lastPosterUsername: "Elegant Totality",
    lastPosterId: 1,
    views: 135,
    replies: 65,
    isClosed: false,
    isSticky: false,
    ratingsNumber: 540,
    ratingsTotal: 2478,
    moderatorNotes: "",
    isDraft: false,
    isApproved: true,
    unapprovedPostsTotal: 0,
    attachmentTotal: 0,
    isDeleted: false,
    deletedAt: null
  },
  {
    id: 2,
    forumId: 2,
    subject: "Single Topic",
    prefix: "",
    icon: "",
    pollId: null,
    userId: 1,
    username: "Elegant Totality",
    firstPostId: 1,
    lastPostCreatedAt: /* @__PURE__ */ new Date(),
    lastPosterUsername: "Elegant Totality",
    lastPosterId: 1,
    views: 33,
    replies: 1,
    isClosed: false,
    isSticky: false,
    ratingsNumber: 2,
    ratingsTotal: 9,
    moderatorNotes: "",
    isDraft: false,
    isApproved: true,
    unapprovedPostsTotal: 0,
    attachmentTotal: 0,
    isDeleted: false,
    deletedAt: null
  },
  {
    id: 3,
    forumId: 2,
    subject: "Single Topic",
    prefix: "",
    icon: "",
    pollId: null,
    userId: 1,
    username: "Elegant Totality",
    firstPostId: 1,
    lastPostCreatedAt: /* @__PURE__ */ new Date(),
    lastPosterUsername: "Elegant Totality",
    lastPosterId: 1,
    views: 126,
    replies: 7,
    isClosed: false,
    isSticky: false,
    ratingsNumber: 3,
    ratingsTotal: 15,
    moderatorNotes: "",
    isDraft: false,
    isApproved: true,
    unapprovedPostsTotal: 0,
    attachmentTotal: 0,
    isDeleted: false,
    deletedAt: null
  },
  {
    id: 4,
    forumId: 2,
    subject: "Single Topic",
    prefix: "",
    icon: "",
    pollId: null,
    userId: 1,
    username: "Elegant Totality",
    firstPostId: 1,
    lastPostCreatedAt: /* @__PURE__ */ new Date(),
    lastPosterUsername: "Elegant Totality",
    lastPosterId: 1,
    views: 100,
    replies: 35,
    isClosed: false,
    isSticky: false,
    ratingsNumber: 540,
    ratingsTotal: 2478,
    moderatorNotes: "",
    isDraft: false,
    isApproved: true,
    unapprovedPostsTotal: 0,
    attachmentTotal: 0,
    isDeleted: false,
    deletedAt: null
  },
  {
    id: 5,
    forumId: 2,
    subject: "Single Topic",
    prefix: "",
    icon: "",
    pollId: null,
    userId: 1,
    username: "Elegant Totality",
    firstPostId: 1,
    lastPostCreatedAt: /* @__PURE__ */ new Date(),
    lastPosterUsername: "Elegant Totality",
    lastPosterId: 1,
    views: 100,
    replies: 35,
    isClosed: false,
    isSticky: false,
    ratingsNumber: 540,
    ratingsTotal: 2478,
    moderatorNotes: "",
    isDraft: false,
    isApproved: true,
    unapprovedPostsTotal: 0,
    attachmentTotal: 0,
    isDeleted: false,
    deletedAt: null
  },
  {
    id: 6,
    forumId: 2,
    subject: "Single Topic",
    prefix: "",
    icon: "",
    pollId: null,
    userId: 1,
    username: "Elegant Totality",
    firstPostId: 1,
    lastPostCreatedAt: /* @__PURE__ */ new Date(),
    lastPosterUsername: "Elegant Totality",
    lastPosterId: 1,
    views: 100,
    replies: 35,
    isClosed: false,
    isSticky: false,
    ratingsNumber: 540,
    ratingsTotal: 2478,
    moderatorNotes: "",
    isDraft: false,
    isApproved: true,
    unapprovedPostsTotal: 0,
    attachmentTotal: 0,
    isDeleted: false,
    deletedAt: null
  },
  {
    id: 7,
    forumId: 2,
    subject: "Single Topic",
    prefix: "",
    icon: "",
    pollId: null,
    userId: 1,
    username: "Elegant Totality",
    firstPostId: 1,
    lastPostCreatedAt: /* @__PURE__ */ new Date(),
    lastPosterUsername: "Elegant Totality",
    lastPosterId: 1,
    views: 100,
    replies: 35,
    isClosed: false,
    isSticky: false,
    ratingsNumber: 540,
    ratingsTotal: 2478,
    moderatorNotes: "",
    isDraft: false,
    isApproved: true,
    unapprovedPostsTotal: 0,
    attachmentTotal: 0,
    isDeleted: false,
    deletedAt: null
  },
  {
    id: 8,
    forumId: 2,
    subject: "Single Topic",
    prefix: "",
    icon: "",
    pollId: null,
    userId: 1,
    username: "Elegant Totality",
    firstPostId: 1,
    lastPostCreatedAt: /* @__PURE__ */ new Date(),
    lastPosterUsername: "Elegant Totality",
    lastPosterId: 1,
    views: 100,
    replies: 35,
    isClosed: false,
    isSticky: false,
    ratingsNumber: 540,
    ratingsTotal: 2478,
    moderatorNotes: "",
    isDraft: false,
    isApproved: true,
    unapprovedPostsTotal: 0,
    attachmentTotal: 0,
    isDeleted: false,
    deletedAt: null
  },
  {
    id: 9,
    forumId: 2,
    subject: "Single Topic",
    prefix: "",
    icon: "",
    pollId: null,
    userId: 1,
    username: "Elegant Totality",
    firstPostId: 1,
    lastPostCreatedAt: /* @__PURE__ */ new Date(),
    lastPosterUsername: "Elegant Totality",
    lastPosterId: 1,
    views: 100,
    replies: 35,
    isClosed: false,
    isSticky: false,
    ratingsNumber: 540,
    ratingsTotal: 2478,
    moderatorNotes: "",
    isDraft: false,
    isApproved: true,
    unapprovedPostsTotal: 0,
    attachmentTotal: 0,
    isDeleted: false,
    deletedAt: null
  },
  {
    id: 10,
    forumId: 2,
    subject: "Single Topic",
    prefix: "",
    icon: "",
    pollId: null,
    userId: 1,
    username: "Elegant Totality",
    firstPostId: 1,
    lastPostCreatedAt: /* @__PURE__ */ new Date(),
    lastPosterUsername: "Elegant Totality",
    lastPosterId: 1,
    views: 100,
    replies: 35,
    isClosed: false,
    isSticky: false,
    ratingsNumber: 540,
    ratingsTotal: 2478,
    moderatorNotes: "",
    isDraft: false,
    isApproved: true,
    unapprovedPostsTotal: 0,
    attachmentTotal: 0,
    isDeleted: false,
    deletedAt: null
  }
];

// src/seeds/users.ts
async function seedUsers(db) {
  const existing = await db.select({ id: userSchema.id }).from(userSchema).limit(1);
  if (existing.length > 0) {
    return;
  }
  userData.map(async (user) => {
    await db.insert(userSchema).values({
      username: user.username,
      password: user.password,
      email: user.email,
      role: user.role,
      avatar: user.avatar,
      userTitle: user.userTitle,
      website: user.website,
      birthday: user.birthday,
      signature: user.signature,
      postCount: user.postCount,
      threadCount: user.threadCount,
      reputation: user.reputation,
      warningPoints: user.warningPoints,
      primaryUserGroup: user.primaryUserGroup,
      registrationDate: user.registrationDate,
      lastActive: user.lastActive,
      lastVisit: user.lastVisit,
      lastPost: user.lastPost,
      allowMessages: user.allowMessages,
      allowMessagesFromFriendsOnly: user.allowMessagesFromFriendsOnly,
      showBirthday: user.showBirthday,
      showSignatures: user.showSignatures,
      showAvatars: user.showAvatars,
      showQuickReply: user.showQuickReply,
      isAway: user.isAway,
      awayReason: user.awayReason,
      postsPerPage: user.postsPerPage,
      threadsPerPage: user.threadsPerPage,
      timezone: user.timezone,
      language: user.language,
      totalTimeOnline: user.totalTimeOnline,
      registrationIp: user.registrationIp,
      lastIp: user.lastIp,
      failedLogins: user.failedLogins,
      updatedDate: user.updatedDate
    });
  });
}
var userData = [
  {
    id: 1,
    username: "Elegant Totality",
    email: "my@email.com",
    password: "pleaseClap",
    role: "admin",
    avatar: "string",
    userTitle: "Administrator",
    website: "reactforums.com",
    birthday: "N/A",
    signature: "My awesome signature",
    postCount: 145,
    threadCount: 13,
    reputation: 3,
    warningPoints: 0,
    primaryUserGroup: "Administrator",
    registrationDate: /* @__PURE__ */ new Date(),
    lastActive: /* @__PURE__ */ new Date(),
    lastVisit: /* @__PURE__ */ new Date(),
    lastPost: /* @__PURE__ */ new Date(),
    allowMessages: true,
    allowMessagesFromFriendsOnly: true,
    showBirthday: true,
    showSignatures: true,
    showAvatars: true,
    showQuickReply: true,
    isAway: true,
    awayReason: "string",
    postsPerPage: 10,
    threadsPerPage: 10,
    timezone: "string",
    language: "string",
    totalTimeOnline: 1e4,
    registrationIp: "string",
    lastIp: "string",
    failedLogins: 0,
    updatedDate: /* @__PURE__ */ new Date()
  },
  {
    id: 2,
    username: "Jeb Bush",
    email: "jeb@bush.com",
    password: "pleaseClap",
    role: "mod",
    avatar: "string",
    userTitle: "Smooth Moderator",
    website: "reactforums.com",
    birthday: "N/A",
    signature: "My awesomest signature",
    postCount: 145,
    threadCount: 13,
    reputation: 0,
    warningPoints: 0,
    primaryUserGroup: "Moderator",
    registrationDate: /* @__PURE__ */ new Date(),
    lastActive: /* @__PURE__ */ new Date(),
    lastVisit: /* @__PURE__ */ new Date(),
    lastPost: /* @__PURE__ */ new Date(),
    allowMessages: true,
    allowMessagesFromFriendsOnly: true,
    showBirthday: true,
    showSignatures: true,
    showAvatars: true,
    showQuickReply: true,
    isAway: true,
    awayReason: "string",
    postsPerPage: 10,
    threadsPerPage: 10,
    timezone: "string",
    language: "string",
    totalTimeOnline: 1e4,
    registrationIp: "string",
    lastIp: "string",
    failedLogins: 0,
    updatedDate: /* @__PURE__ */ new Date()
  }
];

// src/seeds/settings.ts
var import_core = require("@reactforums/core");
async function seedSettings(db) {
  const existing = await db.select({ id: settingSchema.id }).from(settingSchema).limit(1);
  if (existing.length > 0) {
    return;
  }
  settingsData.map(async (setting) => {
    await db.insert(settingSchema).values({
      name: setting.name,
      title: setting.title,
      value: setting.value,
      description: setting.description,
      optionsCode: setting.optionsCode,
      groupId: setting.groupId,
      displayOrder: setting.displayOrder
    });
  });
}
var settingsData = [
  {
    id: 1,
    name: import_core.SettingKey.BoardName,
    title: "Board Name",
    value: "rF Community Forums",
    description: "The name of your community. We recommend that it is not over 75 characters.",
    optionsCode: "text",
    groupId: 1,
    displayOrder: 1
  },
  {
    id: 2,
    name: import_core.SettingKey.BoardDescription,
    title: "Board Description",
    value: "The future of forums.",
    description: "The description of your community.",
    optionsCode: "textarea",
    groupId: 1,
    displayOrder: 2
  },
  {
    id: 3,
    name: import_core.SettingKey.BoardUrl,
    title: "Board URL",
    value: "/",
    description: "The url of your community.",
    optionsCode: "text",
    groupId: 1,
    displayOrder: 3
  },
  {
    id: 4,
    name: import_core.SettingKey.HomepageName,
    title: "Homepage Name",
    value: "reactForums",
    description: "The name of your homepage. This will appear in the footer with a link to it.",
    optionsCode: "text",
    groupId: 1,
    displayOrder: 4
  },
  {
    id: 5,
    name: import_core.SettingKey.HomepageUrl,
    title: "Homepage URL",
    value: "https://reactforums.com",
    description: "The url of your homepage.",
    optionsCode: "text",
    groupId: 1,
    displayOrder: 5
  },
  {
    id: 6,
    name: import_core.SettingKey.SiteMetaTitle,
    title: "Site Meta Title",
    value: "reactForums | Next-Generation Community Software",
    description: "",
    optionsCode: "text",
    groupId: 1,
    displayOrder: 6
  },
  {
    id: 7,
    name: import_core.SettingKey.SiteMetaDescription,
    title: "Site Meta Description",
    value: "The official reactForums community for administrators to stay current with the latest core and platform updates, discuss forum management, exchange tips, and show off their sites.",
    description: "",
    optionsCode: "textarea",
    groupId: 1,
    displayOrder: 7
  },
  {
    id: 8,
    name: import_core.SettingKey.FaviconUrl,
    title: "Favicon URL",
    value: "/favicon-32x32.png",
    description: "",
    optionsCode: "text",
    groupId: 1,
    displayOrder: 8
  }
];

// src/seeds/core.ts
async function seedCore(db) {
  await db.transaction(async (tx) => {
    await seedSettings(tx);
    await seedUsers(tx);
    await seedForums(tx);
    await seedThreads(tx);
  });
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  seedCore,
  seedForums,
  seedSettings,
  seedThreads
});
//# sourceMappingURL=index.js.map