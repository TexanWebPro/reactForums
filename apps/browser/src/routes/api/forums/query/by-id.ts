import { createServerFileRoute } from "@tanstack/react-start/server";
import { forumService } from "../../_server/services";
import { json } from "@tanstack/react-start";

export const ServerRoute = createServerFileRoute(
  "/api/forums/query/by-id",
).methods({
  GET: async ({ request }) => {
    const url = new URL(request.url);
    const id = url.searchParams.get("id");
    if (!id) {
      return json({ error: "Missing `id` query param" }, { status: 400 });
    }

    // (Optional but recommended) normalize
    const normalized = id.trim();

    if (!normalized) {
      return json({ error: "`id` cannot be empty" }, { status: 400 });
    }
    const forums = await forumService.getBreadcrumbForumHierarchy(
      Number(normalized),
    );

    if (!forums) {
      return json({ error: "Forum not found" }, { status: 404 });
    }

    return json(forums);
  },
});
