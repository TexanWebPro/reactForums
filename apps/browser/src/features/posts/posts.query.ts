import {
  mutationOptions,
  QueryClient,
  queryOptions,
} from "@tanstack/react-query";
import { createPost, fetchPostById, fetchPostsByThreadId } from "./posts.api";
import { CreatePostInput, Posts } from "@reactforums/core";
import { Input } from "postcss";

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
  create: (queryClient: QueryClient, postsPerPage: number) =>
    mutationOptions({
      mutationFn: (input: CreatePostInput) => createPost(input),
      onSuccess: async (data) => {
        // cache invalidation
        queryClient.setQueryData(postKeys.byId(data.id), data);

        queryClient.setQueryData(
          postKeys.byThreadId(data.threadId, postsPerPage),
          (oldPosts: Posts | undefined) => {
            if (!oldPosts) return [data];

            return [...oldPosts, data];
          },
        );

        await queryClient.invalidateQueries({
          queryKey: postKeys.byThreadId(data.threadId, postsPerPage),
        });
      },
    }),
};
