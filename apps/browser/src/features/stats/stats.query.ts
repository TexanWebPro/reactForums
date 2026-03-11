import { queryOptions } from "@tanstack/react-query";
import { fetchGlobalStats } from "./stats.api";

export const statsKeys = {
  globalStats: () => ["stats", "globalStats"] as const,
};

export const statsQueries = {
  globalStats: () =>
    queryOptions({
      queryKey: statsKeys.globalStats(),
      queryFn: () => fetchGlobalStats(),
    }),
};
