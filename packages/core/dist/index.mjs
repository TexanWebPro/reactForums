// src/services/forumService.ts
var ForumService = class {
  constructor(baseUrl) {
  }
  // return forums by category, ordered by displayOrder
  listAllForumsByCategory() {
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
        canModsEdit: true,
        children: [
          {
            id: 2,
            isCategory: false,
            parentForumId: 1,
            name: "Forum One",
            description: "The first forum",
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
            rulesTitle: "Forum One Rules",
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
          },
          {
            id: 3,
            isCategory: false,
            parentForumId: 1,
            name: "Forum Two",
            description: "The second forum",
            linkTo: null,
            password: null,
            displayOrder: 0,
            threadCount: 15,
            postCount: 130,
            lastPostTime: /* @__PURE__ */ new Date(),
            lastPostAuthor: "uuid",
            // user ID
            lastPostThreadId: 1,
            lastPostThreadSubject: "Latest Thread Subject",
            rulesTitle: "Forum Two Rules",
            rules: "Rules go here.",
            unapprovedThreadCount: 6,
            unapprovedPostCount: 15,
            isActive: true,
            isLocked: true,
            allowRatings: true,
            usePostCounts: true,
            mustReviewPosts: false,
            mustReviewThreads: false,
            mustReviewAttachments: false,
            canModsEdit: true
          }
        ]
      }
    ];
  }
};
export {
  ForumService
};
//# sourceMappingURL=index.mjs.map