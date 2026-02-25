import { userSchema as users } from "../schema";
import { PgTransaction } from "drizzle-orm/pg-core";
import { NodePgQueryResultHKT } from "drizzle-orm/node-postgres";
import { ExtractTablesWithRelations } from "drizzle-orm";

/**
 * Seeds the default users.
 *
 * Rules:
 * - Must be idempotent
 * - Must not assume any existing data
 * - Must not delete or mutate user-created records
 */
export async function seedUsers(
  db: PgTransaction<
    NodePgQueryResultHKT,
    Record<string, unknown>,
    ExtractTablesWithRelations<Record<string, unknown>>
  >,
) {
  // 1. Check if a user already exists
  const existing = await db.select({ id: users.id }).from(users).limit(1);

  if (existing.length > 0) {
    // User already exists; do nothing
    return;
  }

  userData.map(async (user) => {
    // 2. Insert default users
    await db.insert(users).values({
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
      updatedDate: user.updatedDate,
    });
  });
}

const userData = [
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
    lastActive: new Date(),
    lastVisit: new Date(),
    lastPost: new Date(),
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
    totalTimeOnline: 10000,
    registrationIp: "string",
    lastIp: "string",
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
    lastActive: new Date(),
    lastVisit: new Date(),
    lastPost: new Date(),
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
    totalTimeOnline: 10000,
    registrationIp: "string",
    lastIp: "string",
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
