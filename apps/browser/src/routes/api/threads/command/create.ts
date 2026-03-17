import { createServerFileRoute } from "@tanstack/react-start/server";
import { forumService, threadService } from "@/server/services";
import { json } from "@tanstack/react-start";
import { Thread, CreateThreadInput } from "@reactforums/core";

export const ServerRoute = createServerFileRoute(
  "/api/threads/command/create",
).methods({
  POST: async ({ request }) => {
    const body = (await request
      .json()
      .catch(() => null)) as CreateThreadInput | null;

    if (!body) {
      return json({ error: "Invalid JSON body" }, { status: 400 });
    }

    const forumId = body.forumId;
    const subject = body.subject;
    const userId = body.userId;
    const username = body.username;

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

    try {
      const thread = (await threadService.create({
        forumId,
        subject,
        userId,
        username,
      })) as Thread | null;

      if (!thread) {
        return json({ error: "Failed to create thread" }, { status: 500 });
      }

      return json(thread, { status: 201 });
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "Unexpected server error";

      return json({ error: message }, { status: 500 });
    }
  },
});
