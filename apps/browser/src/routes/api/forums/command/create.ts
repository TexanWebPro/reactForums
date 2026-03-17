import { createServerFileRoute } from "@tanstack/react-start/server";
import { forumService } from "@/server/services";
import { json } from "@tanstack/react-start";
import { Forum, CreateForumInput } from "@reactforums/core";

export const ServerRoute = createServerFileRoute(
  "/api/forums/command/create",
).methods({
  POST: async ({ request }) => {
    const body = (await request
      .json()
      .catch(() => null)) as CreateForumInput | null;

    if (!body) {
      return json({ error: "Invalid JSON body" }, { status: 400 });
    }

    const name = body.name;
    const description = body.description;
    const isCategory = body.isCategory;
    const parentForumId = body.parentForumId;

    if (!name) {
      return json({ error: "`name` cannot be empty" }, { status: 400 });
    }

    if (!description) {
      return json({ error: "`description` cannot be empty" }, { status: 400 });
    }

    if (isCategory === undefined || isCategory === null) {
      return json({ error: "`isCategory` cannot be empty" }, { status: 400 });
    }

    try {
      const user = (await forumService.create({
        name,
        description,
        isCategory,
        parentForumId,
      })) as Forum | null;

      if (!user) {
        return json({ error: "Failed to create user" }, { status: 500 });
      }

      return json(user, { status: 201 });
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "Unexpected server error";

      return json({ error: message }, { status: 500 });
    }
  },
});
