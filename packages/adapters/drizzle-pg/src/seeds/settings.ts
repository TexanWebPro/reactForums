import { settingSchema as settings } from "../schema";
import { PgTransaction } from "drizzle-orm/pg-core";
import { NodePgQueryResultHKT } from "drizzle-orm/node-postgres";
import { ExtractTablesWithRelations } from "drizzle-orm";
import { SettingKey } from "@reactforums/core";

/**
 * Seeds the default settings.
 *
 * Rules:
 * - Must be idempotent
 * - Must not assume any existing data
 * - Must not delete or mutate user-created records
 */
export async function seedSettings(
  db: PgTransaction<
    NodePgQueryResultHKT,
    Record<string, unknown>,
    ExtractTablesWithRelations<Record<string, unknown>>
  >,
) {
  // 1. Check if a settings already exists
  const existing = await db.select({ id: settings.id }).from(settings).limit(1);

  if (existing.length > 0) {
    // Settings already exists; do nothing
    return;
  }

  settingsData.map(async (setting) => {
    // 2. Insert default settings
    await db.insert(settings).values({
      name: setting.name,
      title: setting.title,
      value: setting.value,
      description: setting.description,
      optionsCode: setting.optionsCode,
      groupId: setting.groupId,
      displayOrder: setting.displayOrder,
    });
  });
}

const settingsData = [
  {
    id: 1,
    name: SettingKey.BoardName,
    title: "Board Name",
    value: "rF Community Forums",
    description:
      "The name of your community. We recommend that it is not over 75 characters.",
    optionsCode: "text",
    groupId: 1,
    displayOrder: 1,
  },
  {
    id: 2,
    name: SettingKey.BoardDescription,
    title: "Board Description",
    value: "The future of forums.",
    description: "The description of your community.",
    optionsCode: "textarea",
    groupId: 1,
    displayOrder: 2,
  },
  {
    id: 3,
    name: SettingKey.BoardUrl,
    title: "Board URL",
    value: "/",
    description: "The url of your community.",
    optionsCode: "text",
    groupId: 1,
    displayOrder: 3,
  },
  {
    id: 4,
    name: SettingKey.HomepageName,
    title: "Homepage Name",
    value: "reactForums",
    description:
      "The name of your homepage. This will appear in the footer with a link to it.",
    optionsCode: "text",
    groupId: 1,
    displayOrder: 4,
  },
  {
    id: 5,
    name: SettingKey.HomepageUrl,
    title: "Homepage URL",
    value: "https://reactforums.com",
    description: "The url of your homepage.",
    optionsCode: "text",
    groupId: 1,
    displayOrder: 5,
  },
  {
    id: 6,
    name: SettingKey.SiteMetaTitle,
    title: "Site Meta Title",
    value: "reactForums | Next-Generation Community Software",
    description: "",
    optionsCode: "text",
    groupId: 1,
    displayOrder: 6,
  },
  {
    id: 7,
    name: SettingKey.SiteMetaDescription,
    title: "Site Meta Description",
    value:
      "The official reactForums community for administrators to stay current with the latest core and platform updates, discuss forum management, exchange tips, and show off their sites.",
    description: "",
    optionsCode: "textarea",
    groupId: 1,
    displayOrder: 7,
  },
  {
    id: 8,
    name: SettingKey.FaviconUrl,
    title: "Favicon URL",
    value: "/favicon-32x32.png",
    description: "",
    optionsCode: "text",
    groupId: 1,
    displayOrder: 8,
  },
];
