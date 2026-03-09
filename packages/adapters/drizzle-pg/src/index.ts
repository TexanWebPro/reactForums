import { createForumAdapter } from "@reactforums/core";
import { DrizzlePgDatabase } from "./types";
import { PgTable } from "drizzle-orm/pg-core";
import {
  settingSchema,
  userSchema,
  forumSchema,
  threadSchema,
  postSchema,
} from "./schema";

// import repositories
import { DrizzleSettingRepository } from "./repositories/setting";
import { DrizzleUserRepository } from "./repositories/user";
import { DrizzleForumRepository } from "./repositories/forum";
import { DrizzleThreadRepository } from "./repositories/thread";
import { DrizzlePostRepository } from "./repositories/post";

export interface ReactForumsDrizzleSchema<
  TSettingTable extends PgTable = typeof settingSchema,
  TUserTable extends PgTable = typeof userSchema,
  TForumTable extends PgTable = typeof forumSchema,
  TThreadTable extends PgTable = typeof threadSchema,
  TPostTable extends PgTable = typeof postSchema,
> {
  settings: TSettingTable;
  users: TUserTable;
  forums: TForumTable;
  threads: TThreadTable;
  posts: TPostTable;
}

export const defaultSchema = {
  settings: settingSchema,
  users: userSchema,
  forums: forumSchema,
  threads: threadSchema,
  posts: postSchema,
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
  const postRepo = new DrizzlePostRepository(db, schema);

  return createForumAdapter({
    setting: settingRepo,
    user: userRepo,
    forum: forumRepo,
    thread: threadRepo,
    post: postRepo,
  });
}
