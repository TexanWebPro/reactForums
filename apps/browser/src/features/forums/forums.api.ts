import type {
  CreateForumInput,
  Forum,
  Forums,
  ForumTreeNode,
} from "@reactforums/core";
import { getJson, postJson } from "@/lib/http";

export async function fetchForumById(
  id: number,
): Promise<ForumTreeNode | undefined> {
  return getJson<Forum>(`/api/forums/query/by-id?id=${encodeURIComponent(id)}`);
}

export async function fetchForumsByCategory(): Promise<Forums> {
  return getJson<Forums>(`/api/forums/query/by-category`);
}

export async function createForum(input: CreateForumInput): Promise<Forum> {
  return postJson<Forum, CreateForumInput>("/api/forums/command/create", input);
}
