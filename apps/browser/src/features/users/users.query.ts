import { mutationOptions, queryOptions } from "@tanstack/react-query";
import { createUser, fetchUserById, fetchUserByUsername } from "./users.api";
import { CreateUserInput } from "@reactforums/core";

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

export const userMutations = {
  create: () =>
    mutationOptions({
      mutationFn: (input: CreateUserInput) => createUser({ ...input }),
      // TODO: onSuccess cache invalidation for admin list views, user search, member directory, & admin user table
      // TODO: onSuccess send new user a welcome email and a welcome private mail message
    }),
};
