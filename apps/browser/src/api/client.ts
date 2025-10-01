import {
  ForumService,
  SettingsService,
  StatsService,
  UserService,
} from "@reactforums/core";

const baseUrl = "localhost:9999";

// instantiate services
export const forumService = new ForumService(baseUrl);
export const statsService = new StatsService(baseUrl);
export const userService = new UserService(baseUrl);
export const settingsService = new SettingsService(baseUrl);
