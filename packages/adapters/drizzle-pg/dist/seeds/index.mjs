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
import { SettingKey } from "@reactforums/core";
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
    name: SettingKey.BoardName,
    title: "Board Name",
    value: "rF Community Forums",
    description: "The name of your community. We recommend that it is not over 75 characters.",
    optionsCode: "text",
    groupId: 1,
    displayOrder: 1
  },
  {
    id: 2,
    name: SettingKey.BoardDescription,
    title: "Board Description",
    value: "The future of forums.",
    description: "The description of your community.",
    optionsCode: "textarea",
    groupId: 1,
    displayOrder: 2
  },
  {
    id: 3,
    name: SettingKey.BoardUrl,
    title: "Board URL",
    value: "/",
    description: "The url of your community.",
    optionsCode: "text",
    groupId: 1,
    displayOrder: 3
  },
  {
    id: 4,
    name: SettingKey.HomepageName,
    title: "Homepage Name",
    value: "reactForums",
    description: "The name of your homepage. This will appear in the footer with a link to it.",
    optionsCode: "text",
    groupId: 1,
    displayOrder: 4
  },
  {
    id: 5,
    name: SettingKey.HomepageUrl,
    title: "Homepage URL",
    value: "https://reactforums.com",
    description: "The url of your homepage.",
    optionsCode: "text",
    groupId: 1,
    displayOrder: 5
  },
  {
    id: 6,
    name: SettingKey.SiteMetaTitle,
    title: "Site Meta Title",
    value: "reactForums | Next-Generation Community Software",
    description: "",
    optionsCode: "text",
    groupId: 1,
    displayOrder: 6
  },
  {
    id: 7,
    name: SettingKey.SiteMetaDescription,
    title: "Site Meta Description",
    value: "The official reactForums community for administrators to stay current with the latest core and platform updates, discuss forum management, exchange tips, and show off their sites.",
    description: "",
    optionsCode: "textarea",
    groupId: 1,
    displayOrder: 7
  },
  {
    id: 8,
    name: SettingKey.FaviconUrl,
    title: "Favicon URL",
    value: "/favicon-32x32.png",
    description: "",
    optionsCode: "text",
    groupId: 1,
    displayOrder: 8
  }
];

// src/seeds/posts.ts
async function seedPosts(db) {
  const existing = await db.select({ id: postSchema.id }).from(postSchema).limit(1);
  if (existing.length > 0) {
    return;
  }
  postData.map(async (post) => {
    await db.insert(postSchema).values({
      threadId: post.threadId,
      forumId: post.forumId,
      userId: post.userId,
      username: post.username,
      content: post.content,
      ipAddress: post.ipAddress,
      longIpAddress: post.longIpAddress,
      includeSignature: post.includeSignature,
      editUserId: post.editUserId,
      isDraft: post.isDraft,
      isApproved: post.isApproved
    });
  });
}
var postData = [
  {
    id: 1,
    threadId: 1,
    forumId: 2,
    userId: 1,
    username: "Elegant Totality",
    content: "Lorem, y'know?",
    ipAddress: "IP address",
    longIpAddress: "Long IP address",
    includeSignature: true,
    editUserId: 1,
    isDraft: false,
    isApproved: true
  }
];

// src/seeds/core.ts
async function seedCore(db) {
  await db.transaction(async (tx) => {
    await seedSettings(tx);
    await seedUsers(tx);
    await seedForums(tx);
    await seedThreads(tx);
    await seedPosts(tx);
  });
}
export {
  seedCore,
  seedForums,
  seedPosts,
  seedSettings,
  seedThreads
};
//# sourceMappingURL=index.mjs.map