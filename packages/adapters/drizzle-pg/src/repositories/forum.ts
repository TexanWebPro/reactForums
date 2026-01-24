import { Forum, ForumRepository, Forums } from "@reactforums/core";
import { eq } from "drizzle-orm";
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
  async getAllForums(): Promise<Forums> {
    const forumsTable = this.schema.forums;
    const forums = await this.db.select().from(forumsTable);
    return forums.map((forum) => this.mapDbForumToForum(forum));
  }

  async getForumById(id: number): Promise<Forum | undefined> {
    const forums = await this.db
      .select()
      .from(this.schema.forums)
      .where(eq(this.schema.forums.id, id));

    const forum = forums[0];
    if (!forum) return;
    return this.mapDbForumToForum(forum);
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
