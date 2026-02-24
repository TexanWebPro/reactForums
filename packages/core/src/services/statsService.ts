import { ForumStats } from "../domain/models";

export class StatsService {
  constructor() {}

  getGlobalStats(): ForumStats {
    return {
      threadCount: 16,
      postCount: 140,
      memberCount: 4136121,
      mostOnlineAtOnce: 42749,
      mostOnlineAtOnceDate: new Date(),
    };
  }

  // recalculate totals if data is out of sync
  rebuildStats() {
    return;
  }
}
