import type { Forum, Forums, ForumTreeNode } from "@reactforums/core";
import { getJson } from "@/lib/http";

export async function fetchForumById(id: number): Promise<ForumTreeNode> {
  return getJson<Forum>(`/api/forums/query/by-id?id=${encodeURIComponent(id)}`);
}

export async function fetchForumsByCategory(): Promise<Forums> {
  return getJson<Forums>(`/api/forums/query/by-category`);
}

export async function fetchForumBreadcrumbById(id: number): Promise<Forums> {
  return getJson<Forums>(
    `/api/forums/query/breadcrumb-hierarchy?id=${encodeURIComponent(id)}`,
  );
}
