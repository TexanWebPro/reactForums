import { ForumStats } from "../domain/models";
import { UserRepository } from "../repositories/UserRepository";
import { ThreadRepository } from "../repositories/ThreadRepository";
import { PostRepository } from "../repositories/PostRepository";

export class StatsService {
  constructor(
    private users: UserRepository,
    private threads: ThreadRepository,
    private posts: PostRepository,
  ) {}

  async getGlobalStats(): Promise<ForumStats> {
    const [userCount, threadCount, postCount, latestUser] = await Promise.all([
      this.users.countVisibleUsers(),
      this.threads.countVisibleThreads(),
      this.posts.countVisiblePosts(),
      this.users.getLatestUser(),
    ]);

    return {
      latestUser,
      userCount,
      threadCount,
      postCount,
      mostOnlineAtOnce: 42749, // TODO: update after AuthService
      mostOnlineAtOnceDate: new Date(), // TODO: update after AuthService
    };
  }
}
