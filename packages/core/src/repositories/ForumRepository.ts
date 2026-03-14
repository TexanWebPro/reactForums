import { CreateForumInput, Forum, Forums } from "../domain/models";

export interface ForumRepository {
  createForum(input: CreateForumInput): Promise<Forum | undefined>;
  getAllForums(): Promise<Forums>;
  getForumById(id: number): Promise<Forum | undefined>;
}
