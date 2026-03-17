import { CreatePostInput, Post, Posts } from "../domain/models";

export interface PostRepository {
  createPost(input: CreatePostInput): Promise<Post | undefined>;
  getNPostsInThread(
    threadId: number,
    limit: number,
  ): Promise<Posts | undefined>;
  getPostById(postId: number): Promise<Post | undefined>;
  getPostReplies(postId: number): Promise<Posts | undefined>;
  countVisiblePosts(): Promise<number>;
}
