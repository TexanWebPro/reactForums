export interface User {
  id: string;
  username: string;
  email: string;
  password: string;
  role: "admin" | "mod" | "user" | "banned";
  avatar: string;
  userTitle: string;
  website: string;
  birthday: string;
  signature: string;
  postCount: string;
  reputation: number;
  warningPoints: number;
  primaryUserGroup: string;
  registrationDate: Date;
  lastactive: Date;
  lastVisit: Date;
  lastPost: Date;
  allowMessages: boolean;
  allowMessagesFromBuddiesOnly: boolean;
  showBirthday: boolean;
  showSignatures: boolean;
  showAvatars: boolean;
  showQuickReply: boolean;
  isAway: boolean;
  awayReason: string;
  postsPerPage: number;
  threadsPerPage: number;
  timezone: string;
  language: string;
  totalTimeOnline: number;
  registrationIP: string;
  lastIP: string;
  failedLogins: number;
  updatedDate: Date;
}

export interface ForumStats {
  threadCount: number;
  postCount: number;
  memberCount: number;
  mostOnlineAtOnce: number;
  mostOnlineAtOnceDate: Date;
}

export interface Forum {
  id: number;
  isCategory: boolean;
  parentForumId: number | null;
  name: string;
  description: string;
  linkTo: string | null;
  password: string | null;
  displayOrder: number;
  threadCount: number;
  postCount: number;
  lastPostTime: Date;
  lastPostAuthor: string; // user ID
  lastPostThreadId: number;
  lastPostThreadSubject: string;
  rulesTitle: string;
  rules: string;
  unapprovedThreadCount: number;
  unapprovedPostCount: number;
  isActive: boolean;
  isLocked: boolean;
  allowRatings: boolean;
  usePostCounts: boolean;
  mustReviewPosts: boolean;
  mustReviewThreads: boolean;
  mustReviewAttachments: boolean;
  canModsEdit: boolean;
}

export interface ForumTreeNode extends Forum {
  children?: ForumTreeNode[];
}
