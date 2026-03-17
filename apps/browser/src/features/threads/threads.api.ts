import type { CreateThreadInput, Thread } from "@reactforums/core";
import { getJson, postJson } from "@/lib/http";

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

export async function createThread(input: CreateThreadInput): Promise<Thread> {
  return postJson<Thread, CreateThreadInput>(
    "/api/threads/command/create",
    input,
  );
}
