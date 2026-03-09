import { postSchema as posts } from "../schema";
import { PgTransaction } from "drizzle-orm/pg-core";
import { NodePgQueryResultHKT } from "drizzle-orm/node-postgres";
import { ExtractTablesWithRelations } from "drizzle-orm";

/**
 * Seeds the forum with default posts.
 *
 * Rules:
 * - Must be idempotent
 * - Must not assume any existing data
 * - Must not delete or mutate user-created records
 */
export async function seedPosts(
  db: PgTransaction<
    NodePgQueryResultHKT,
    Record<string, unknown>,
    ExtractTablesWithRelations<Record<string, unknown>>
  >,
) {
  // 1. Check if a post already exists
  const existing = await db.select({ id: posts.id }).from(posts).limit(1);

  if (existing.length > 0) {
    // Post already exists; do nothing
    return;
  }

  postData.map(async (post) => {
    // 2. Insert default posts
    await db.insert(posts).values({
      threadId: post.threadId,
      forumId: post.forumId,
      userId: post.userId,
      username: post.username,
      content: post.content,
      ipAddress: post.ipAddress,
      longIpAddress: post.longIpAddress,
      includeSignature: post.includeSignature,
      editUserId: post.editUserId,
      isDraft: post.isDraft,
      isApproved: post.isApproved,
    });
  });
}

const postData = [
  {
    id: 1,
    threadId: 1,
    forumId: 2,
    userId: 1,
    username: "Elegant Totality",
    content: "Lorem, y'know?",
    ipAddress: "IP address",
    longIpAddress: "Long IP address",
    includeSignature: true,
    editUserId: 1,
    isDraft: false,
    isApproved: true,
  },
];
