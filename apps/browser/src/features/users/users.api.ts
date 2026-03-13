import type { CreateUserInput, User } from "@reactforums/core";
import { getJson, postJson } from "@/lib/http";

export async function fetchUserById(id: number): Promise<User> {
  return getJson<User>(`/api/users/query/by-id?id=${encodeURIComponent(id)}`);
}

export async function fetchUserByUsername(username: string): Promise<User> {
  return getJson<User>(
    `/api/users/query/by-username?username=${encodeURIComponent(username)}`,
  );
}

export async function createUser(input: CreateUserInput): Promise<User> {
  return postJson<User, CreateUserInput>(`/api/users/command/create`, input);
}
