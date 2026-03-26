import { threadSchema as threads } from "../schema";
import { PgTransaction } from "drizzle-orm/pg-core";
import { NodePgQueryResultHKT } from "drizzle-orm/node-postgres";
import { ExtractTablesWithRelations } from "drizzle-orm";

/**
 * Seeds the forum with default threads.
 *
 * Rules:
 * - Must be idempotent
 * - Must not assume any existing data
 * - Must not delete or mutate user-created records
 */
export async function seedThreads(
  db: PgTransaction<
    NodePgQueryResultHKT,
    Record<string, unknown>,
    ExtractTablesWithRelations<Record<string, unknown>>
  >,
) {
  // 1. Check if a thread already exists
  const existing = await db.select({ id: threads.id }).from(threads).limit(1);

  if (existing.length > 0) {
    // Thread already exists; do nothing
    return;
  }

  threadData.map(async (thread) => {
    // 2. Insert default threads
    await db.insert(threads).values({
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
      deletedAt: thread.deletedAt,
    });
  });
}

const threadData = [
  {
    id: 1,
    forumId: 2,
    subject: "My First Thread",
    prefix: "",
    icon: "",
    pollId: null,
    userId: 1,
    username: "Elegant Totality",
    firstPostId: 1,
    lastPostCreatedAt: new Date(),
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
    deletedAt: null,
  },
];
