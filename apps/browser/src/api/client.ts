import {
  ForumService,
  ThreadService,
  PostService,
  UserService,
  StatsService,
  SettingsService,
} from "@reactforums/core";

const baseUrl = "localhost:9999";

// instantiate services
export const forumService = new ForumService(baseUrl);
export const threadService = new ThreadService(baseUrl);
export const postService = new PostService(baseUrl);
export const userService = new UserService(baseUrl);
export const statsService = new StatsService(baseUrl);
export const settingsService = new SettingsService(baseUrl);
