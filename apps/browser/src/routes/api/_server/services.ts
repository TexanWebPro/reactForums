import {
  ForumService,
  ThreadService,
  PostService,
  UserService,
  StatsService,
  SettingsService,
  ProfileFieldsService,
} from "@reactforums/core";
import { repository } from "./data/drizzleAdapter";

// instantiate services
export const forumService = new ForumService(repository.forum);
export const threadService = new ThreadService(repository.thread);
export const postService = new PostService();
export const userService = new UserService();
export const statsService = new StatsService();
export const settingsService = new SettingsService();
export const profileFieldsService = new ProfileFieldsService();
