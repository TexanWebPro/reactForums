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
  id: serial().primaryKey().notNull(),
  isCategory: boolean().notNull(),
  parentForumId: integer(),
  name: text().notNull(),
  description: text().notNull(),
  linkTo: text(),
  password: text(),
  displayOrder: integer().notNull(),
  threadCount: integer().notNull(),
  postCount: integer().notNull(),
  lastPostTime: date(),
  lastPostAuthor: text(),
  // lastPostAuthor: "uuid", // user ID
  lastPostThreadId: integer(),
  lastPostThreadSubject: text(),
  rulesTitle: text(),
  rules: text(),
  unapprovedThreadCount: integer().notNull().default(0),
  unapprovedPostCount: integer().notNull().default(0),
  isActive: boolean().notNull().default(false),
  isLocked: boolean().notNull().default(false),
  allowRatings: boolean().notNull().default(true),
  usePostCounts: boolean().notNull().default(true),
  mustReviewPosts: boolean().notNull().default(false),
  mustReviewThreads: boolean().notNull().default(false),
  mustReviewAttachments: boolean().notNull().default(false),
  canModsEdit: boolean().notNull().default(true)
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
    const forums = await this.db.select().from(this.schema.forums).where(eq(this.schema.forums.id, id));
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
  return createForumAdapter({
    forum: forumRepo
  });
}
export {
  defaultSchema,
  drizzlePgAdapter
};
//# sourceMappingURL=index.mjs.map