import { createForumAdapter } from "@reactforums/core";
import { DrizzlePgDatabase } from "./types";
import { PgTable } from "drizzle-orm/pg-core";
import { forumSchema, threadSchema, userSchema } from "./schema";

// import repositories
import { DrizzleForumRepository } from "./repositories/forum";
import { DrizzleThreadRepository } from "./repositories/thread";
import { DrizzleUserRepository } from "./repositories/user";

export interface ReactForumsDrizzleSchema<
  TUserTable extends PgTable = typeof userSchema,
  TForumTable extends PgTable = typeof forumSchema,
  TThreadTable extends PgTable = typeof threadSchema,
> {
  users: TUserTable;
  forums: TForumTable;
  threads: TThreadTable;
}

export const defaultSchema = {
  users: userSchema,
  forums: forumSchema,
  threads: threadSchema,
};

export function drizzlePgAdapter<
  TSchema extends ReactForumsDrizzleSchema,
>(options: { db: DrizzlePgDatabase; schema?: TSchema }) {
  const { db } = options;
  const schema = options.schema ?? defaultSchema;
  const userRepo = new DrizzleUserRepository(db, schema);
  const forumRepo = new DrizzleForumRepository(db, schema);
  const threadRepo = new DrizzleThreadRepository(db, schema);

  return createForumAdapter({
    user: userRepo,
    forum: forumRepo,
    thread: threadRepo,
  });
}
