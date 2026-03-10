import { createServerFileRoute } from "@tanstack/react-start/server";
import { threadService } from "@/server/services";
import { json } from "@tanstack/react-start";

export const ServerRoute = createServerFileRoute(
  "/api/threads/query/by-forum",
).methods({
  GET: async ({ request }) => {
    const url = new URL(request.url);
    const forumId = url.searchParams.get("forumId");
    const limit = url.searchParams.get("limit");
    if (!forumId) {
      return json({ error: "Missing `forumId` query param" }, { status: 400 });
    }

    const normalized = forumId.trim();

    if (!normalized) {
      return json({ error: "`forumId` cannot be empty" }, { status: 400 });
    }

    const threads = await threadService.getLastNThreadsInForum(
      Number(normalized),
      Number(limit) ?? 10,
    );

    if (!threads) {
      return json({ error: "Threads not found" }, { status: 404 });
    }

    return json(threads);
  },
});
