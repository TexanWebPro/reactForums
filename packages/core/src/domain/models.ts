export interface Thread {
  id: number;
  title: string;
  slug: string;
  authorId: string;
  createdAt: Date;
  updatedAt?: Date;
  pinned?: boolean;
  locked?: boolean;
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
