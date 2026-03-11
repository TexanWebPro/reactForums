import { createServerFileRoute } from "@tanstack/react-start/server";
import { statsService } from "@/server/services";
import { json } from "@tanstack/react-start";

export const ServerRoute = createServerFileRoute(
  "/api/stats/query/all-stats",
).methods({
  GET: async () => {
    const stats = await statsService.getGlobalStats();

    return json(stats);
  },
});
