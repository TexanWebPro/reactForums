import { Setting, SettingKey } from "../domain/models";

export class SettingsService {
  constructor(baseUrl: string) {}

  getByName(name: SettingKey): Setting | null {
    const settingsTable: Setting[] = [
      {
        id: 1,
        name: SettingKey.BoardName,
        value: "rF Community Forums",
        description:
          "The name of your community. We recommend that it is not over 75 characters.",
        groupId: 1,
      },
      {
        id: 2,
        name: SettingKey.BoardDescription,
        value: "The future of forums.",
        description: "The description of your community.",
        groupId: 1,
      },
      {
        id: 3,
        name: SettingKey.BoardUrl,
        value: "/",
        description: "The url of your community.",
        groupId: 1,
      },
      {
        id: 4,
        name: SettingKey.HomepageName,
        value: "reactForums",
        description:
          "The name of your homepage. This will appear in the footer with a link to it.",
        groupId: 1,
      },
      {
        id: 5,
        name: SettingKey.HomepageUrl,
        value: "https://reactforums.com",
        description: "The url of your homepage.",
        groupId: 1,
      },
      {
        id: 6,
        name: SettingKey.SiteMetaTitle,
        value: "reactForums | Next-Generation Community Software",
        description: "",
        groupId: 1,
      },
      {
        id: 7,
        name: SettingKey.SiteMetaDescription,
        value:
          "The official reactForums community for administrators to stay current with the latest core and platform updates, discuss forum management, exchange tips, and show off their sites.",
        description: "",
        groupId: 1,
      },
      {
        id: 8,
        name: SettingKey.FaviconUrl,
        value: "/favicon-32x32.png",
        description: "",
        groupId: 1,
      },
    ];

    return settingsTable.find((s) => s.name === name) ?? null;
  }
}
