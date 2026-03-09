import { Post, Posts } from "../domain/models";
import type { PostRepository } from "../repositories/PostRepository";

export class PostService {
  constructor(private repository: PostRepository) {}

  async getPostById(postId: number): Promise<Post | undefined> {
    const post = await this.repository.getPostById(postId);
    return post;
  }

  async getNPostsInThread(
    postId: number,
    n: number,
  ): Promise<Posts | undefined> {
    const allPosts = await this.repository.getNPostsInThread(postId, n);
    return allPosts;
  }

  async getPostReplies(postId: number): Promise<Posts | undefined> {
    const allReplies = await this.repository.getPostReplies(postId);
    return allReplies;
  }

  // buildTree(posts: Posts, parentId: number | null = null): PostTreeNode[] {
  //   return posts
  //     .filter((p) => p.parentPostId === parentId)
  //     .map((p) => ({ ...p, children: this.buildTree(posts, p.id) }));
  // }
}
