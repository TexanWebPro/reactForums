import { Thread, Threads } from "../domain/models";

export interface ThreadRepository {
  getAllThreadsInForum(forumId: number): Promise<Threads>;
  getThreadById(threadId: number): Promise<Thread | undefined>;
}
