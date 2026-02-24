import { createServerFileRoute } from "@tanstack/react-start/server";
import { forumService } from "../../_server/services";
import { json } from "@tanstack/react-start";

export const ServerRoute = createServerFileRoute(
  "/api/forums/query/by-id",
).methods({
  GET: async () => {
    const forums = await forumService.getBreadcrumbForumHierarchy(2);

    return json(forums);
  },
});
