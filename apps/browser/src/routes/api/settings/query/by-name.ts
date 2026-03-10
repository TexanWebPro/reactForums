import { createServerFileRoute } from "@tanstack/react-start/server";
import { settingsService } from "@/server/services";
import { json } from "@tanstack/react-start";
import { SettingKey } from "@reactforums/core";

export const ServerRoute = createServerFileRoute(
  "/api/settings/query/by-name",
).methods({
  GET: async ({ request }) => {
    const url = new URL(request.url);
    const name = url.searchParams.get("name");
    if (!name) {
      return json({ error: "Missing `name` query param" }, { status: 400 });
    }

    // (Optional but recommended) normalize
    const normalized = name.trim();

    if (!normalized) {
      return json({ error: "`name` cannot be empty" }, { status: 400 });
    }
    const setting = await settingsService.getByName(normalized as SettingKey);

    if (!setting) {
      return json({ error: "Setting not found" }, { status: 404 });
    }

    return json(setting);
  },
});
