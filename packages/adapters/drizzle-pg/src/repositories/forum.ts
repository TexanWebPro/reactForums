import {
  CreateForumInput,
  Forum,
  ForumRepository,
  Forums,
  Thread,
} from "@reactforums/core";
import { and, eq, sql } from "drizzle-orm";
import { DrizzlePgDatabase } from "src/types";
import { ReactForumsDrizzleSchema } from "src";

export class DrizzleForumRepository<TSchema extends ReactForumsDrizzleSchema>
  implements ForumRepository
{
  db: DrizzlePgDatabase;
  schema: TSchema;

  constructor(db: DrizzlePgDatabase, schema: TSchema) {
    this.db = db;
    this.schema = schema;
  }

  async createForum(input: CreateForumInput): Promise<Forum | undefined> {
    const forumsTable = this.schema.forums;
    const forums = await this.db.insert(forumsTable).values(input).returning();

    const forum = forums[0];
    if (!forum) return;
    return this.mapDbForumToForum(forum);
  }

  async getAllForums(): Promise<Forums> {
    const forumsTable = this.schema.forums;
    const forums = await this.db.select().from(forumsTable);
    return forums.map((forum) => this.mapDbForumToForum(forum));
  }

  async getForumById(id: number): Promise<Forum | undefined> {
    const forumsTable = this.schema.forums;
    const forums = await this.db
      .select()
      .from(this.schema.forums)
      .where(eq(forumsTable.id, id));

    const forum = forums[0];
    if (!forum) return;
    return this.mapDbForumToForum(forum);
  }

  async updateForum(forum: Forum): Promise<void> {
    throw new Error("Method not implemented.");
  }

  async updateLatestPost(
    forumId: number,
    thread: Thread,
    username: string,
  ): Promise<void> {
    const forumsTable = this.schema.forums;
    await this.db
      .update(forumsTable)
      .set({
        lastPostAuthor: username,
        lastPostThreadId: thread.id,
        lastPostThreadSubject: thread.subject,
        lastPostTime: thread.createdAt.toDateString(),
      })
      .where(
        and(
          eq(forumsTable.id, forumId),
          sql`(${forumsTable.lastPostTime} IS NULL OR ${forumsTable.lastPostTime} < ${thread.createdAt})`,
        ),
      );
  }

  async incrementStats(
    forumId: number,
    threadDelta: number,
    postDelta: number,
  ): Promise<void> {
    const forumsTable = this.schema.forums;
    await this.db
      .update(forumsTable)
      .set({
        threadCount: sql`${forumsTable.threadCount} + ${threadDelta}`,
        postCount: sql`${forumsTable.postCount} + ${postDelta}`,
      })
      .where(eq(forumsTable.id, forumId));
  }

  mapDbForumToForum(forum: any): Forum {
    return {
      ...forum,
      lastPostTime: forum.lastPostTime ? new Date(forum.lastPostTime) : null,
      lastPostAuthor: forum.lastPostAuthor ?? null,
      lastPostThreadId: forum.lastPostThreadId ?? null,
      lastPostThreadSubject: forum.lastPostThreadSubject ?? null,
      rulesTitle: forum.rulesTitle ?? null,
      rules: forum.rules ?? null,
    };
  }
}
