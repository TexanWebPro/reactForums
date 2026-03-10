import { queryOptions } from "@tanstack/react-query";
import { fetchUserById, fetchUserByUsername } from "./users.api";

export const userKeys = {
  all: ["users"] as const,
  byId: (id: number) => ["users", "byId", id] as const,
  byUsername: (username: string) => ["users", "byUsername", username] as const,
};

export const userQueries = {
  byId: (id: number) =>
    queryOptions({
      queryKey: userKeys.byId(id),
      queryFn: () => fetchUserById(id),
    }),

  byUsername: (username: string) =>
    queryOptions({
      queryKey: userKeys.byUsername(username),
      queryFn: () => fetchUserByUsername(username),
    }),
};
