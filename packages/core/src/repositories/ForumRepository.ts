import { Forum, Forums } from "../domain/models";

export interface ForumRepository {
  getAllForums(): Promise<Forums>;

  getForumById(id: number): Promise<Forum | undefined>;
}
