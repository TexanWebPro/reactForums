// src/services/forumService.ts
var ForumService = class {
  constructor(baseUrl) {
  }
  listAllForums() {
    return [
      {
        id: 1,
        isCategory: true,
        parentForumId: null,
        name: "Category One",
        description: "The first category",
        linkTo: null,
        password: null,
        displayOrder: 0,
        threadCount: 1,
        postCount: 10,
        lastPostTime: /* @__PURE__ */ new Date(),
        lastPostAuthor: "uuid",
        // user ID
        lastPostThreadId: 1,
        lastPostThreadSubject: "Latest Thread Subject",
        rulesTitle: "Category Rules",
        rules: "Rules go here.",
        unapprovedThreadCount: 6,
        unapprovedPostCount: 15,
        isActive: true,
        isLocked: false,
        allowRatings: true,
        usePostCounts: true,
        mustReviewPosts: false,
        mustReviewThreads: false,
        mustReviewAttachments: false,
        canModsEdit: true
      }
    ];
  }
};
export {
  ForumService
};
//# sourceMappingURL=index.mjs.map