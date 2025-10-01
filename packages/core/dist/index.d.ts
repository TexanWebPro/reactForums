interface ForumStats {
    threadCount: number;
    postCount: number;
    memberCount: number;
    mostOnlineAtOnce: number;
    mostOnlineAtOnceDate: Date;
}
interface Forum {
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
    lastPostAuthor: string;
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
interface ForumTreeNode extends Forum {
    children?: ForumTreeNode[];
}

declare class ForumService {
    constructor(baseUrl: string);
    listAllForumsByCategory(): ForumTreeNode[];
}

export { type Forum, ForumService, type ForumStats, type ForumTreeNode };
