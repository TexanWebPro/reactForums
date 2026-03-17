import { mutationOptions, queryOptions } from "@tanstack/react-query";
import { createPost, fetchPostById, fetchPostsByThreadId } from "./posts.api";
import { CreatePostInput } from "@reactforums/core";

export const postKeys = {
  all: ["posts"] as const,
  byId: (id: number) => ["posts", "byId", id] as const,
  byThreadId: (threadId: number, limit: number) =>
    ["posts", "byThreadId", threadId, limit] as const,
};

export const postQueries = {
  byId: (id: number) =>
    queryOptions({
      queryKey: postKeys.byId(id),
      queryFn: () => fetchPostById(id),
    }),

  byThreadId: (threadId: number, limit: number) =>
    queryOptions({
      queryKey: postKeys.byThreadId(threadId, limit),
      queryFn: () => fetchPostsByThreadId(threadId, limit),
    }),
};

export const postMutations = {
  create: () =>
    mutationOptions({
      mutationFn: (input: CreatePostInput) => createPost(input),
      onSuccess: async () => {
        // cache invalidation
      },
    }),
};
