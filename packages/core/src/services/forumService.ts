import { Forum, ForumTreeNode } from "../domain/models";
import type { ForumRepository } from "../repositories/ForumRepository";

export class ForumService {
  constructor(
    private baseUrl: string,
    private repository: ForumRepository,
  ) {}

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

  buildTree(forums: Forum[], parentId: number | null = null): ForumTreeNode[] {
    return forums
      .filter((f) => f.parentForumId === parentId)
      .map((f) => ({ ...f, children: this.buildTree(forums, f.id) }));
  }
}
