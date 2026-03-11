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
export const postService = new PostService(repository.post);
export const userService = new UserService(repository.user);
export const settingsService = new SettingsService(repository.setting);
export const profileFieldsService = new ProfileFieldsService();
export const statsService = new StatsService(
  repository.user,
  repository.thread,
  repository.post,
);
