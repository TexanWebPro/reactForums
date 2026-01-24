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

// src/schema/index.ts
var schema_exports = {};
__export(schema_exports, {
  forumSchema: () => forumSchema
});
module.exports = __toCommonJS(schema_exports);

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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  forumSchema
});
//# sourceMappingURL=index.js.map