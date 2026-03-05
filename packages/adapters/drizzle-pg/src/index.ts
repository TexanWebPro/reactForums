import { createForumAdapter } from "@reactforums/core";
import { DrizzlePgDatabase } from "./types";
import { PgTable } from "drizzle-orm/pg-core";
import { forumSchema, threadSchema, userSchema, settingSchema } from "./schema";

// import repositories
import { DrizzleForumRepository } from "./repositories/forum";
import { DrizzleThreadRepository } from "./repositories/thread";
import { DrizzleUserRepository } from "./repositories/user";
import { DrizzleSettingRepository } from "./repositories/setting";

export interface ReactForumsDrizzleSchema<
  TSettingTable extends PgTable = typeof settingSchema,
  TUserTable extends PgTable = typeof userSchema,
  TForumTable extends PgTable = typeof forumSchema,
  TThreadTable extends PgTable = typeof threadSchema,
> {
  settings: TSettingTable;
  users: TUserTable;
  forums: TForumTable;
  threads: TThreadTable;
}

export const defaultSchema = {
  settings: settingSchema,
  users: userSchema,
  forums: forumSchema,
  threads: threadSchema,
};

export function drizzlePgAdapter<
  TSchema extends ReactForumsDrizzleSchema,
>(options: { db: DrizzlePgDatabase; schema?: TSchema }) {
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
    thread: threadRepo,
  });
}
