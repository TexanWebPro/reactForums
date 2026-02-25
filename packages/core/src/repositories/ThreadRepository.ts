import { Thread, Threads } from "../domain/models";

export interface ThreadRepository {
  getAllThreadsInForum(forumId: number, limit: number): Promise<Threads>;
  getThreadById(threadId: number): Promise<Thread | undefined>;
}
