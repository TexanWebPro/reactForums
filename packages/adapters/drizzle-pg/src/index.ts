import { createForumAdapter } from "@reactforums/core";
import { DrizzlePgDatabase } from "./types";
import { PgTable } from "drizzle-orm/pg-core";
import { forumSchema, threadSchema } from "./schema";

// import repositories
import { DrizzleForumRepository } from "./repositories/forum";
import { DrizzleThreadRepository } from "./repositories/thread";

export interface ReactForumsDrizzleSchema<
  TForumTable extends PgTable = typeof forumSchema,
  TThreadTable extends PgTable = typeof threadSchema,
> {
  forums: TForumTable;
  threads: TThreadTable;
}

export const defaultSchema = {
  forums: forumSchema,
  threads: threadSchema,
};

export function drizzlePgAdapter<
  TSchema extends ReactForumsDrizzleSchema,
>(options: { db: DrizzlePgDatabase; schema?: TSchema }) {
  const { db } = options;
  const schema = options.schema ?? defaultSchema;
  const forumRepo = new DrizzleForumRepository(db, schema);
  const threadRepo = new DrizzleThreadRepository(db, schema);

  return createForumAdapter({
    forum: forumRepo,
    thread: threadRepo,
  });
}

const users = [
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
    registrationDate: new Date(),
    lastactive: new Date(),
    lastVisit: new Date(),
    lastPost: new Date(),
    allowMessages: true,
    allowMessagesFromBuddiesOnly: true,
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
    totalTimeOnline: 10000,
    registrationIP: "string",
    lastIP: "string",
    failedLogins: 0,
    updatedDate: new Date(),
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
    registrationDate: new Date(),
    lastactive: new Date(),
    lastVisit: new Date(),
    lastPost: new Date(),
    allowMessages: true,
    allowMessagesFromBuddiesOnly: true,
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
    totalTimeOnline: 10000,
    registrationIP: "string",
    lastIP: "string",
    failedLogins: 0,
    updatedDate: new Date(),
  },
];

const allReputations = [
  {
    id: 1,
    userId: 1,
    givingUserId: 2,
    postId: 1,
    count: 3,
    date: new Date(),
    comments: "You're awesome for building reactForums!",
  },
  {
    id: 1,
    userId: 2,
    givingUserId: 1,
    postId: 2,
    count: 2,
    date: new Date(),
    comments: "You're awesome for using reactForums!",
  },
  {
    id: 1,
    userId: 1,
    givingUserId: 2,
    postId: 2,
    count: -3,
    date: new Date(),
    updatedAt: new Date(),
    comments: "Your a poser",
  },
  {
    id: 1,
    userId: 1,
    givingUserId: 2,
    postId: 2,
    count: 0,
    date: new Date(),
    comments: undefined,
  },
];

const profileFieldValues = [
  {
    userId: 1,
    fieldId: 1,
    value: "Not the White House",
  },
  {
    userId: 1,
    fieldId: 2,
    value: "I was born at a very young age.",
  },
  {
    userId: 1,
    fieldId: 3,
    value: "Male",
  },
];
