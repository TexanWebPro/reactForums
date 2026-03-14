import { mutationOptions, queryOptions } from "@tanstack/react-query";
import {
  fetchForumById,
  fetchForumsByCategory,
  createForum,
} from "./forums.api";
import { CreateForumInput } from "@reactforums/core";

export const forumKeys = {
  all: ["forums"] as const,
  byId: (id: number) => ["forums", "byId", id] as const,
  byCategory: () => ["forums", "byCategory"] as const,
  breadcrumbById: (id: number) => ["forums", "breadcrumbById", id] as const,
};

export const forumQueries = {
  byId: (id: number) =>
    queryOptions({
      queryKey: forumKeys.byId(id),
      queryFn: () => fetchForumById(id),
    }),

  byCategory: () =>
    queryOptions({
      queryKey: forumKeys.byCategory(),
      queryFn: () => fetchForumsByCategory(),
    }),
};

export const forumMutations = {
  create: () =>
    mutationOptions({
      mutationFn: (input: CreateForumInput) => createForum(input),
      onSuccess: () => {
        // cache invalidation
      },
    }),
};
