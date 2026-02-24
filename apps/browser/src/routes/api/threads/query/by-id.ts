import { createServerFileRoute } from "@tanstack/react-start/server";
import { forumService, threadService } from "../../_server/services";
import { json } from "@tanstack/react-start";

export const ServerRoute = createServerFileRoute(
  "/api/threads/query/by-id",
).methods({
  GET: async () => {
    const thread = await threadService.getThreadById(2);

    return json(thread);
  },
});
