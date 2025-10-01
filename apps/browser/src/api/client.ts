import { ForumService, StatsService } from "@reactforums/core";

const baseUrl = "localhost:9999";

// instantiate services
export const forumService = new ForumService(baseUrl);
export const statsService = new StatsService(baseUrl);
