import { createServerFileRoute } from "@tanstack/react-start/server";
import { postService } from "@/server/services";
import { json } from "@tanstack/react-start";

export const ServerRoute = createServerFileRoute(
  "/api/posts/query/by-thread",
).methods({
  GET: async ({ request }) => {
    const url = new URL(request.url);
    const threadId = url.searchParams.get("threadId");
    const limit = url.searchParams.get("limit");
    if (!threadId) {
      return json({ error: "Missing `threadId` query param" }, { status: 400 });
    }

    // (Optional but recommended) normalize
    const normalized = threadId.trim();

    if (!normalized) {
      return json({ error: "`threadId` cannot be empty" }, { status: 400 });
    }

    const post = await postService.getNPostsInThread(
      Number(normalized),
      Number(limit),
    );

    if (!post) {
      return json({ error: "Post not found" }, { status: 404 });
    }

    return json(post);
  },
});
