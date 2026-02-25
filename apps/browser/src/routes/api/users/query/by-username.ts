import { createServerFileRoute } from "@tanstack/react-start/server";
import { userService } from "../../_server/services";
import { json } from "@tanstack/react-start";

export const ServerRoute = createServerFileRoute(
  "/api/users/query/by-username",
).methods({
  GET: async ({ request }) => {
    const url = new URL(request.url);
    const username = url.searchParams.get("username");
    if (!username) {
      return json({ error: "Missing `username` query param" }, { status: 400 });
    }

    // (Optional but recommended) normalize
    const normalized = username.trim();

    if (!normalized) {
      return json({ error: "`username` cannot be empty" }, { status: 400 });
    }

    const user = await userService.getUserByUsername(normalized);

    if (!user) {
      return json({ error: "User not found" }, { status: 404 });
    }

    return json(user);
  },
});
