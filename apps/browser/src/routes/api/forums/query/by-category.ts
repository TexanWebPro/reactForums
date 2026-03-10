import { createServerFileRoute } from "@tanstack/react-start/server";
import { forumService } from "@/server/services";
import { json } from "@tanstack/react-start";

export const ServerRoute = createServerFileRoute(
  "/api/forums/query/by-category",
).methods({
  GET: async () => {
    const forums = await forumService.listAllForumsByCategory();

    return json(forums);
  },
});
