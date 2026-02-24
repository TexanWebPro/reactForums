import { Thread, ThreadRepository, Threads } from "@reactforums/core";
import { eq } from "drizzle-orm";
import { DrizzlePgDatabase } from "src/types";
import { ReactForumsDrizzleSchema } from "src";

export class DrizzleThreadRepository<TSchema extends ReactForumsDrizzleSchema>
  implements ThreadRepository
{
  db: DrizzlePgDatabase;
  schema: TSchema;

  constructor(db: DrizzlePgDatabase, schema: TSchema) {
    this.db = db;
    this.schema = schema;
  }

  async getAllThreadsInForum(forumId: number): Promise<Threads> {
    const threadsTable = this.schema.threads;
    const threads = await this.db
      .select()
      .from(threadsTable)
      .where(eq(threadsTable.forumId, forumId));
    return threads.map((thread) => this.mapDbThreadToThread(thread));
  }

  async getThreadById(threadId: number): Promise<Thread | undefined> {
    const threadsTable = this.schema.threads;
    const threads = await this.db
      .select()
      .from(threadsTable)
      .where(eq(threadsTable.id, threadId));

    const thread = threads[0];
    if (!thread) return;
    return this.mapDbThreadToThread(thread);
  }

  mapDbThreadToThread(thread: any): Thread {
    return {
      ...thread,
      lastPostCreatedAt: thread.lastPostCreatedAt
        ? new Date(thread.lastPostCreatedAt)
        : null,
    };
  }
}
