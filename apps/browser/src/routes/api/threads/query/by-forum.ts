import { createServerFileRoute } from "@tanstack/react-start/server";
import { forumService, threadService } from "../../_server/services";
import { json } from "@tanstack/react-start";

export const ServerRoute = createServerFileRoute(
  "/api/threads/query/by-forum",
).methods({
  GET: async () => {
    const threads = await threadService.getLastNThreadsInForum(2, 10);

    return json(threads);
  },
});
