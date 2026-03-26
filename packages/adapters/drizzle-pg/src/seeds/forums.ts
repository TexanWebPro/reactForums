import { forumSchema as forums } from "../schema";
import { PgTransaction } from "drizzle-orm/pg-core";
import { NodePgQueryResultHKT } from "drizzle-orm/node-postgres";
import { ExtractTablesWithRelations } from "drizzle-orm";

/**
 * Seeds the default forums.
 *
 * Rules:
 * - Must be idempotent
 * - Must not assume any existing data
 * - Must not delete or mutate user-created records
 */
export async function seedForums(
  db: PgTransaction<
    NodePgQueryResultHKT,
    Record<string, unknown>,
    ExtractTablesWithRelations<Record<string, unknown>>
  >,
) {
  // 1. Check if a forum already exists
  const existing = await db.select({ id: forums.id }).from(forums).limit(1);

  if (existing.length > 0) {
    // Forum already exists; do nothing
    return;
  }

  forumData.map(async (forum) => {
    // 2. Insert default forums
    await db.insert(forums).values({
      isCategory: forum.isCategory,
      parentForumId: forum.parentForumId,
      name: forum.name,
      description: forum.description,
      linkTo: forum.linkTo,
      password: forum.password,
      displayOrder: forum.displayOrder,
      rulesTitle: forum.rulesTitle,
      rules: forum.rules,
      unapprovedThreadCount: forum.unapprovedThreadCount,
      unapprovedPostCount: forum.unapprovedPostCount,
      isActive: forum.isActive,
      isLocked: forum.isLocked,
      allowRatings: forum.allowRatings,
      usePostCounts: forum.usePostCounts,
      mustReviewPosts: forum.mustReviewPosts,
      mustReviewThreads: forum.mustReviewThreads,
      mustReviewAttachments: forum.mustReviewAttachments,
      canModsEdit: forum.canModsEdit,
    });
  });
}

const forumData = [
  {
    isCategory: true,
    parentForumId: null,
    name: "My Category",
    description: "The first category of your brand new forum",
    linkTo: null,
    password: null,
    displayOrder: 0,
    rulesTitle: "Category Rules",
    rules: "Rules go here.",
    unapprovedThreadCount: 6,
    unapprovedPostCount: 15,
    isActive: true,
    isLocked: false,
    allowRatings: true,
    usePostCounts: true,
    mustReviewPosts: false,
    mustReviewThreads: false,
    mustReviewAttachments: false,
    canModsEdit: true,
  },
  {
    isCategory: false,
    parentForumId: 1,
    name: "My Forum",
    description: "The first board of your brand new forum",
    linkTo: null,
    password: null,
    displayOrder: 0,
    rulesTitle: "Forum One Rules",
    rules: "Rules go here.",
    unapprovedThreadCount: 6,
    unapprovedPostCount: 15,
    isActive: true,
    isLocked: false,
    allowRatings: true,
    usePostCounts: true,
    mustReviewPosts: false,
    mustReviewThreads: false,
    mustReviewAttachments: false,
    canModsEdit: true,
  },
];
