import {
  CreateForumInput,
  Forum,
  Forums,
  ForumTreeNode,
  Thread,
} from "../domain/models";
import type { ForumRepository } from "../repositories/ForumRepository";

export class ForumService {
  constructor(private repository: ForumRepository) {}

  /**
   *
   * Create Method
   */

  async create(input: CreateForumInput): Promise<Forum | undefined> {
    const forum = await this.repository.createForum(input);
    return forum;
  }
  /**
   *
   * Read Methods
   */

  // return forums by category, ordered by displayOrder
  async listAllForumsByCategory(): Promise<ForumTreeNode[]> {
    const forums = await this.repository.getAllForums();
    const forumTree = this.buildTree(forums);
    return forumTree;
  }

  async getBreadcrumbForumHierarchy(
    id: number,
  ): Promise<ForumTreeNode | undefined> {
    const forums = await this.repository.getAllForums();
    const forum = await this.repository.getForumById(id);
    if (!forum) return;

    const forumWithChildren = {
      ...forum,
      children: this.buildTree(forums, forum.id),
    };
    return forumWithChildren;
  }

  /**
   *
   * Update Methods
   */

  // async UpdateForumDetails() {
  // const forum = await this.repository.save();
  // }

  async updateLatestPost(forumId: number, thread: Thread, username: string) {
    const forum = await this.repository.updateLatestPost(
      forumId,
      thread,
      username,
    );
    return forum;
  }

  async incrementStats(
    forumId: number,
    threadDelta: number,
    postDelta: number,
  ) {
    const forum = await this.repository.incrementStats(
      forumId,
      threadDelta,
      postDelta,
    );
    return forum;
  }

  /**
   *
   * Utility Methods
   */

  buildTree(forums: Forums, parentId: number | null = null): ForumTreeNode[] {
    return forums
      .filter((f) => f.parentForumId === parentId)
      .map((f) => ({ ...f, children: this.buildTree(forums, f.id) }));
  }
}
