import type { Post, Posts } from "@reactforums/core";
import { getJson } from "@/lib/http";

export type CreatePostInput = {
  threadId: number;
  content: string;
  isDraft?: boolean;
};

export async function fetchPostById(id: number): Promise<Post> {
  return getJson<Post>(`/api/posts/query/by-id?id=${encodeURIComponent(id)}`);
}

export async function fetchPostsByThreadId(
  threadId: number,
  limit: number,
): Promise<Posts> {
  return getJson<Posts>(
    `/api/posts/query/by-thread?threadId=${encodeURIComponent(threadId)}&limit=${encodeURIComponent(limit)}`,
  );
}

// export async function createPost(input: CreatePostInput): Promise<Post> {
//   return postJson<Post, CreatePostInput>(`/api/posts/command/create`, input);
// }
