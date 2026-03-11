import { Post, PostRepository, Posts } from "@reactforums/core";
import { DrizzlePgDatabase } from "src/types";
import { ReactForumsDrizzleSchema } from "src";
import { eq } from "drizzle-orm";

export class DrizzlePostRepository<TSchema extends ReactForumsDrizzleSchema>
  implements PostRepository
{
  db: DrizzlePgDatabase;
  schema: TSchema;

  constructor(db: DrizzlePgDatabase, schema: TSchema) {
    this.db = db;
    this.schema = schema;
  }

  async countVisiblePosts(): Promise<number> {
    const postsTable = this.schema.posts;
    const posts = await this.db.$count(postsTable);

    // TODO: clean this up to account for non-visible posts (isDraft=true;isApproved=false)
    return posts;
  }

  async getNPostsInThread(
    threadId: number,
    limit: number,
  ): Promise<Posts | undefined> {
    const postsTable = this.schema.posts;
    const posts = this.db
      .select()
      .from(postsTable)
      .where(eq(postsTable.threadId, threadId))
      .limit(limit);

    if (!posts) return;
    return posts;
  }

  async getPostById(postId: number): Promise<Post | undefined> {
    const postsTable = this.schema.posts;
    const posts = await this.db
      .select()
      .from(postsTable)
      .where(eq(postsTable.id, postId));

    const post = posts[0];
    if (!post) return;
    return post;
  }

  getPostReplies(postId: number): Promise<Posts | undefined> {
    throw new Error("Method not implemented.");
  }
}
