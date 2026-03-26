import { CreateForumInput, Forum, Forums, Thread } from "../domain/models";

export interface ForumRepository {
  createForum(input: CreateForumInput): Promise<Forum | undefined>;
  getAllForums(): Promise<Forums>;
  getForumById(id: number): Promise<Forum | undefined>;
  updateForum(forum: Forum): Promise<void>;
  updateLatestPost(
    forumId: number,
    thread: Thread,
    username: string,
  ): Promise<void>;
  incrementStats(
    forumId: number,
    threadDelta: number,
    postDelta: number,
  ): Promise<void>;
}
