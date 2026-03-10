import { queryOptions } from "@tanstack/react-query";
import {
  fetchForumBreadcrumbById,
  fetchForumById,
  fetchForumsByCategory,
} from "./forums.api";

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

  breadcrumbById: (id: number) =>
    queryOptions({
      queryKey: forumKeys.breadcrumbById(id),
      queryFn: () => fetchForumBreadcrumbById(id),
    }),
};
