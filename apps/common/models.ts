export interface ForumStatsView {
  latestUser: { username: string };
  threadCount: string;
  postCount: string;
  memberCount: string;
  mostOnlineAtOnce: string;
  mostOnlineAtOnceDate: Date;
}
