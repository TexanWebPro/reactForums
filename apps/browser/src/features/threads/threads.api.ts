import type { Thread } from "@reactforums/core";
import { getJson } from "@/lib/http";

export async function fetchThreadById(id: number): Promise<Thread> {
  return getJson<Thread>(
    `/api/threads/query/by-id?id=${encodeURIComponent(id)}`,
  );
}

export async function fetchThreadsByForumId(
  forumId: number,
  limit: number,
): Promise<Thread[]> {
  return getJson<Thread[]>(
    `/api/threads/query/by-forum?forumId=${encodeURIComponent(forumId)}&limit=${encodeURIComponent(limit)}`,
  );
}

export async function fetchRecentThreads(): Promise<Thread[]> {
  return getJson<Thread[]>(`/api/threads/query/recent`);
}
