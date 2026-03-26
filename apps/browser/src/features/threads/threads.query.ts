import { mutationOptions, queryOptions } from "@tanstack/react-query";
import {
  createThread,
  fetchRecentThreads,
  fetchThreadById,
  fetchThreadsByForumId,
} from "./threads.api";
import { CreatePostInput, CreateThreadInput } from "@reactforums/core";

export const threadKeys = {
  all: ["threads"] as const,
  byId: (id: number) => ["threads", "byId", id] as const,
  byForumId: (forumId: number, limit: number) =>
    ["threads", "byForumId", forumId, limit] as const,
  recent: () => ["threads", "recent"] as const,
};

export const threadQueries = {
  byId: (id: number) =>
    queryOptions({
      queryKey: threadKeys.byId(id),
      queryFn: () => fetchThreadById(id),
    }),

  byForumId: (forumId: number, limit: number) =>
    queryOptions({
      queryKey: threadKeys.byForumId(forumId, limit),
      queryFn: () => fetchThreadsByForumId(forumId, limit),
    }),

  recent: () =>
    queryOptions({
      queryKey: threadKeys.recent(),
      queryFn: () => fetchRecentThreads(),
    }),
};

export const threadMutations = {
  create: () =>
    mutationOptions({
      mutationFn: (
        input: CreateThreadInput & Omit<CreatePostInput, "threadId">,
      ) => createThread(input),
      onSuccess: () => {
        // cache invalidation
      },
    }),
};
