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
  seedForums: () => seedForums
});
module.exports = __toCommonJS(seeds_exports);

// src/schema/forum.ts
var import_pg_core = require("drizzle-orm/pg-core");
var forumSchema = (0, import_pg_core.pgTable)("rf_forums", {
  id: (0, import_pg_core.serial)().primaryKey().notNull(),
  isCategory: (0, import_pg_core.boolean)().notNull(),
  parentForumId: (0, import_pg_core.integer)(),
  name: (0, import_pg_core.text)().notNull(),
  description: (0, import_pg_core.text)().notNull(),
  linkTo: (0, import_pg_core.text)(),
  password: (0, import_pg_core.text)(),
  displayOrder: (0, import_pg_core.integer)().notNull(),
  threadCount: (0, import_pg_core.integer)().notNull(),
  postCount: (0, import_pg_core.integer)().notNull(),
  lastPostTime: (0, import_pg_core.date)(),
  lastPostAuthor: (0, import_pg_core.text)(),
  // lastPostAuthor: "uuid", // user ID
  lastPostThreadId: (0, import_pg_core.integer)(),
  lastPostThreadSubject: (0, import_pg_core.text)(),
  rulesTitle: (0, import_pg_core.text)(),
  rules: (0, import_pg_core.text)(),
  unapprovedThreadCount: (0, import_pg_core.integer)().notNull().default(0),
  unapprovedPostCount: (0, import_pg_core.integer)().notNull().default(0),
  isActive: (0, import_pg_core.boolean)().notNull().default(false),
  isLocked: (0, import_pg_core.boolean)().notNull().default(false),
  allowRatings: (0, import_pg_core.boolean)().notNull().default(true),
  usePostCounts: (0, import_pg_core.boolean)().notNull().default(true),
  mustReviewPosts: (0, import_pg_core.boolean)().notNull().default(false),
  mustReviewThreads: (0, import_pg_core.boolean)().notNull().default(false),
  mustReviewAttachments: (0, import_pg_core.boolean)().notNull().default(false),
  canModsEdit: (0, import_pg_core.boolean)().notNull().default(true)
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

// src/seeds/core.ts
async function seedCore(db) {
  await db.transaction(async (tx) => {
    await seedForums(tx);
  });
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  seedCore,
  seedForums
});
//# sourceMappingURL=index.js.map