import {
  ForumService,
  ThreadService,
  PostService,
  UserService,
  StatsService,
  SettingsService,
  ProfileFieldsService,
} from "@reactforums/core";
import { DrizzleForumRepository } from "./data/forumRepository";

const baseUrl = "localhost:9999";

// instantiate repositories
const forumRepository = new DrizzleForumRepository();

// instantiate services
export const forumService = new ForumService(baseUrl, forumRepository);
export const threadService = new ThreadService(baseUrl);
export const postService = new PostService(baseUrl);
export const userService = new UserService(baseUrl);
export const statsService = new StatsService(baseUrl);
export const settingsService = new SettingsService(baseUrl);
export const profileFieldsService = new ProfileFieldsService(baseUrl);
