import { createServerFileRoute } from "@tanstack/react-start/server";
import { postService } from "@/server/services";
import { json } from "@tanstack/react-start";

export const ServerRoute = createServerFileRoute(
  "/api/posts/query/by-id",
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

    const post = await postService.getPostById(Number(normalized));

    if (!post) {
      return json({ error: "Post not found" }, { status: 404 });
    }

    return json(post);
  },
});
