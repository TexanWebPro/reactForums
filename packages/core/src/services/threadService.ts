import { Thread, Threads } from "../domain/models";
import type { ThreadRepository } from "../repositories/ThreadRepository";

export class ThreadService {
  constructor(private repository: ThreadRepository) {}

  async getLastNThreadsInForum(forumId: number, _n: number): Promise<Threads> {
    const threads = await this.repository.getAllThreadsInForum(forumId);
    return threads;
  }

  async getThreadById(threadId: number): Promise<Thread | undefined> {
    const threads = await this.repository.getThreadById(threadId);
    return threads;
  }
}
