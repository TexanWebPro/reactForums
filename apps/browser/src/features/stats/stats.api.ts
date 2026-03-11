import type { ForumStats } from "@reactforums/core";
import { getJson } from "@/lib/http";

export async function fetchGlobalStats(): Promise<ForumStats> {
  return getJson<ForumStats>(`/api/stats/query/all-stats`);
}
