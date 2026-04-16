import { createServerFileRoute } from "@tanstack/react-start/server";
import { forumService, postService, threadService } from "@/server/services";
import { json } from "@tanstack/react-start";
import { CreatePostInput, Post } from "@reactforums/core";

export const ServerRoute = createServerFileRoute(
  "/api/posts/command/create",
).methods({
  POST: async ({ request }) => {
    const body = (await request
      .json()
      .catch(() => null)) as CreatePostInput | null;

    if (!body) {
      return json({ error: "Invalid JSON body" }, { status: 400 });
    }

    const forumId = body.forumId;
    const threadId = body.threadId;
    const userId = body.userId;
    const username = body.username;
    const content = body.content;
    const ipAddress = body.ipAddress;
    const longIpAddress = body.longIpAddress;

    if (!threadId) {
      return json({ error: "`threadId` cannot be empty" }, { status: 400 });
    }
    if (!forumId) {
      return json({ error: "`forumId` cannot be empty" }, { status: 400 });
    }
    if (!userId) {
      return json({ error: "`userId` cannot be empty" }, { status: 400 });
    }
    if (!username) {
      return json({ error: "`username` cannot be empty" }, { status: 400 });
    }
    if (!content) {
      return json({ error: "`content` cannot be empty" }, { status: 400 });
    }
    if (!ipAddress) {
      return json({ error: "`ipAddress` cannot be empty" }, { status: 400 });
    }
    if (!longIpAddress) {
      return json(
        { error: "`longIpAddress` cannot be empty" },
        { status: 400 },
      );
    }

    try {
      const post = (await postService.create({
        threadId,
        forumId,
        userId,
        username,
        content,
        ipAddress,
        longIpAddress,
      })) as Post | null;

      if (!post) {
        return json({ error: "Failed to create post" }, { status: 500 });
      }

      try {
        const thread = await threadService.getThreadById(threadId);
        const threadDelta = 0;
        const postDelta = 1;

        if (!thread) {
          return json(
            { error: "Failed to increment forum stats" },
            { status: 500 },
          );
        }

        try {
          await forumService.updateLatestPost(forumId, thread, username);
          await forumService.incrementStats(forumId, threadDelta, postDelta);
        } catch (error) {
          const message =
            error instanceof Error ? error.message : "Unexpected server error";

          return json({ error: message }, { status: 500 });
        }
      } catch (error) {
        const message =
          error instanceof Error ? error.message : "Unexpected server error";

        return json({ error: message }, { status: 500 });
      }

      return json(post, { status: 201 });
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "Unexpected server error";

      return json({ error: message }, { status: 500 });
    }
  },
});
