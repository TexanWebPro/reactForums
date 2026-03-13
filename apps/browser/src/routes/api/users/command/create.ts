import { createServerFileRoute } from "@tanstack/react-start/server";
import { userService } from "@/server/services";
import { json } from "@tanstack/react-start";
import { User, CreateUserInput } from "@reactforums/core";

export const ServerRoute = createServerFileRoute(
  "/api/users/command/create",
).methods({
  POST: async ({ request }) => {
    const body = (await request
      .json()
      .catch(() => null)) as CreateUserInput | null;

    if (!body) {
      return json({ error: "Invalid JSON body" }, { status: 400 });
    }

    const username = body.username;
    const email = body.email;
    const password = body.password;
    const registrationIp = body.registrationIp;
    const lastIp = body.lastIp;

    if (!username) {
      return json({ error: "`username` cannot be empty" }, { status: 400 });
    }

    if (!email) {
      return json({ error: "`email` cannot be empty" }, { status: 400 });
    }

    if (!password) {
      return json({ error: "`password` cannot be empty" }, { status: 400 });
    }

    if (!registrationIp) {
      return json(
        { error: "`registrationIp` cannot be empty" },
        { status: 400 },
      );
    }

    if (!lastIp) {
      return json({ error: "`lastIp` cannot be empty" }, { status: 400 });
    }

    try {
      const user = (await userService.create({
        username,
        email,
        password,
        registrationIp,
        lastIp,
      })) as User | null;

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
