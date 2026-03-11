import { createServerFileRoute } from "@tanstack/react-start/server";
import { settingsService } from "@/server/services";
import { json } from "@tanstack/react-start";
import { SettingKey } from "@reactforums/core";

export const ServerRoute = createServerFileRoute(
  "/api/settings/query/by-names",
).methods({
  GET: async ({ request }) => {
    const url = new URL(request.url);
    const names = url.searchParams.getAll("name");
    if (!names) {
      return json({ error: "Missing `name` query param" }, { status: 400 });
    }

    // (Optional but recommended) normalize
    const normalized = names
      .map((name) => name.trim())
      .filter((name) => name.length > 0);

    if (normalized.length === 0) {
      return json({ error: "`name` cannot be empty" }, { status: 400 });
    }
    const settings = await settingsService.getByNames(
      normalized as SettingKey[],
    );

    if (!settings) {
      return json({ error: "Setting not found" }, { status: 404 });
    }

    return json(settings);
  },
});
