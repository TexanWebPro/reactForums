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

// src/repositories/forum.ts
var import_drizzle_orm = require("drizzle-orm");
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
    const forums = await this.db.select().from(this.schema.forums).where((0, import_drizzle_orm.eq)(this.schema.forums.id, id));
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

// src/index.ts
var defaultSchema = {
  forums: forumSchema
};
function drizzlePgAdapter(options) {
  const { db } = options;
  const schema = options.schema ?? defaultSchema;
  const forumRepo = new DrizzleForumRepository(db, schema);
  return (0, import_core.createForumAdapter)({
    forum: forumRepo
  });
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  defaultSchema,
  drizzlePgAdapter
});
//# sourceMappingURL=index.js.map