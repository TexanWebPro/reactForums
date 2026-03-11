import type { Forum, Forums, ForumTreeNode } from "@reactforums/core";
import { getJson } from "@/lib/http";

export async function fetchForumById(
  id: number,
): Promise<ForumTreeNode | undefined> {
  return getJson<Forum>(`/api/forums/query/by-id?id=${encodeURIComponent(id)}`);
}

export async function fetchForumsByCategory(): Promise<Forums> {
  return getJson<Forums>(`/api/forums/query/by-category`);
}
