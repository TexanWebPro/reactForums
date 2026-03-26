import { createServerFileRoute } from "@tanstack/react-start/server";
import { forumService, postService, threadService } from "@/server/services";
import { json } from "@tanstack/react-start";
import {
  Thread,
  CreateThreadInput,
  Post,
  CreatePostInput,
} from "@reactforums/core";

export const ServerRoute = createServerFileRoute(
  "/api/threads/command/create",
).methods({
  POST: async ({ request }) => {
    const body = (await request.json().catch(() => null)) as
      | (CreateThreadInput & CreatePostInput)
      | null;

    if (!body) {
      return json({ error: "Invalid JSON body" }, { status: 400 });
    }

    const forumId = body.forumId;
    const subject = body.subject;
    const userId = body.userId;
    const username = body.username;
    const content = body.content;
    const ipAddress = body.ipAddress;
    const longIpAddress = body.longIpAddress;

    if (!forumId) {
      return json({ error: "`forumId` cannot be empty" }, { status: 400 });
    }
    if (!subject) {
      return json({ error: "`subject` cannot be empty" }, { status: 400 });
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
      const thread = (await threadService.create({
        forumId,
        subject,
        userId,
        username,
        // TODO: isDraft
      })) as Thread | null;

      if (!thread) {
        return json({ error: "Failed to create thread" }, { status: 500 });
      }

      const threadDelta = 1;

      const post = (await postService.create({
        threadId: thread.id,
        forumId,
        userId,
        username,
        content,
        ipAddress,
        longIpAddress,
      })) as Post | null;

      if (!post) {
        return json({ error: "Failed to create thread" }, { status: 500 });
      }

      const postDelta = 1;

      try {
        await forumService.updateLatestPost(forumId, thread, username);
        await forumService.incrementStats(forumId, threadDelta, postDelta);
        // TODO: if(thread.isDraft) do not increment
        // TODO: if(thread.isDraft && attachments) upload attachments
      } catch (error) {
        const message =
          error instanceof Error ? error.message : "Unexpected server error";

        return json({ error: message }, { status: 500 });
      }

      return json(thread, { status: 201 });
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "Unexpected server error";

      return json({ error: message }, { status: 500 });
    }
  },
});
