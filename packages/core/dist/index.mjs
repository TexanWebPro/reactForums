// src/domain/models.ts
var SettingKey = /* @__PURE__ */ ((SettingKey2) => {
  SettingKey2["BoardName"] = "bbname";
  SettingKey2["BoardDescription"] = "board_description";
  SettingKey2["BoardUrl"] = "board_url";
  SettingKey2["HomepageName"] = "homepage_name";
  SettingKey2["HomepageUrl"] = "homepage_url";
  SettingKey2["Timezone"] = "timezone";
  SettingKey2["DefaultLanguage"] = "default_language";
  SettingKey2["LogoUrl"] = "logo_url";
  SettingKey2["FaviconUrl"] = "favicon_url";
  SettingKey2["AllowRegistration"] = "allow_registration";
  SettingKey2["RequireEmailVerification"] = "require_email_verification";
  SettingKey2["DefaultUserRole"] = "default_user_role";
  SettingKey2["MaxLoginAttempts"] = "max_login_attempts";
  SettingKey2["PasswordMinLength"] = "password_min_length";
  SettingKey2["UsernameMinLength"] = "username_min_length";
  SettingKey2["UsernameMaxLength"] = "username_max_length";
  SettingKey2["AllowGuestPosting"] = "allow_guest_posting";
  SettingKey2["PostsRequireApproval"] = "posts_require_approval";
  SettingKey2["ThreadsRequireApproval"] = "threads_require_approval";
  SettingKey2["AttachmentsRequireApproval"] = "attachments_require_approval";
  SettingKey2["CanModsEditPosts"] = "can_mods_edit";
  SettingKey2["MaxAttachmentSizeMB"] = "max_attachment_size_mb";
  SettingKey2["AllowedAttachmentTypes"] = "allowed_attachment_types";
  SettingKey2["MaxPostLength"] = "max_post_length";
  SettingKey2["MaxThreadLength"] = "max_thread_length";
  SettingKey2["PostsPerPage"] = "posts_per_page";
  SettingKey2["ThreadsPerPage"] = "threads_per_page";
  SettingKey2["DateFormat"] = "date_format";
  SettingKey2["ShowOnlineStatus"] = "show_online_status";
  SettingKey2["ShowUserAvatars"] = "show_user_avatars";
  SettingKey2["DefaultAvatarUrl"] = "default_avatar_url";
  SettingKey2["SiteMetaTitle"] = "site_meta_title";
  SettingKey2["SiteMetaDescription"] = "site_meta_description";
  SettingKey2["SiteMetaKeywords"] = "site_meta_keywords";
  SettingKey2["OpenGraphImageUrl"] = "open_graph_image_url";
  SettingKey2["RobotsTxtContent"] = "robots_txt_content";
  SettingKey2["SendEmailOnNewPost"] = "send_email_on_new_post";
  SettingKey2["SendEmailOnNewThread"] = "send_email_on_new_thread";
  SettingKey2["EmailFromAddress"] = "email_from_address";
  SettingKey2["EmailSmtpHost"] = "email_smtp_host";
  SettingKey2["EmailSmtpPort"] = "email_smtp_port";
  SettingKey2["EmailSmtpUser"] = "email_smtp_user";
  SettingKey2["EmailSmtpPassword"] = "email_smtp_password";
  SettingKey2["EnableRecaptcha"] = "enable_recaptcha";
  SettingKey2["RecaptchaSiteKey"] = "recaptcha_site_key";
  SettingKey2["RecaptchaSecretKey"] = "recaptcha_secret_key";
  SettingKey2["AnalyticsScript"] = "analytics_script";
  SettingKey2["EnableWebSockets"] = "enable_websockets";
  SettingKey2["MaxConcurrentUsers"] = "max_concurrent_users";
  return SettingKey2;
})(SettingKey || {});

// src/services/forumService.ts
var ForumService = class {
  constructor(baseUrl, repository) {
    this.baseUrl = baseUrl;
    this.repository = repository;
  }
  // return forums by category, ordered by displayOrder
  async listAllForumsByCategory() {
    const forums = await this.repository.getAllForums();
    const forumTree = this.buildTree(forums);
    return forumTree;
  }
  async getBreadcrumbForumHierarchy(id) {
    const forums = await this.repository.getAllForums();
    const forum = await this.repository.getForumById(id);
    if (!forum) return;
    const forumWithChildren = {
      ...forum,
      children: this.buildTree(forums, forum.id)
    };
    return forumWithChildren;
  }
  buildTree(forums, parentId = null) {
    return forums.filter((f) => f.parentForumId === parentId).map((f) => ({ ...f, children: this.buildTree(forums, f.id) }));
  }
};

// src/services/threadService.ts
var threads = [
  {
    id: 1,
    forumId: 2,
    subject: "First Thread",
    prefix: "",
    icon: "",
    pollId: null,
    userId: "uuid",
    username: "Elegant Totality",
    createdAt: /* @__PURE__ */ new Date(),
    updatedAt: /* @__PURE__ */ new Date(),
    firstPostId: 1,
    lastPostCreatedAt: /* @__PURE__ */ new Date(),
    lastPosterUsername: "Elegant Totality",
    lastPosterId: "uuid",
    views: 135,
    replies: 65,
    isClosed: false,
    isSticky: false,
    ratingsNumber: 540,
    ratingsTotal: 2478,
    moderatorNotes: "",
    isDraft: false,
    isApproved: true,
    unapprovedPostsTotal: 0,
    attachmentTotal: 0,
    isDeleted: false
  },
  {
    id: 2,
    forumId: 2,
    subject: "Single Topic",
    prefix: "",
    icon: "",
    pollId: null,
    userId: "uuid",
    username: "Elegant Totality",
    createdAt: /* @__PURE__ */ new Date(),
    updatedAt: /* @__PURE__ */ new Date(),
    firstPostId: 1,
    lastPostCreatedAt: /* @__PURE__ */ new Date(),
    lastPosterUsername: "Elegant Totality",
    lastPosterId: "uuid",
    views: 33,
    replies: 1,
    isClosed: false,
    isSticky: false,
    ratingsNumber: 2,
    ratingsTotal: 9,
    moderatorNotes: "",
    isDraft: false,
    isApproved: true,
    unapprovedPostsTotal: 0,
    attachmentTotal: 0,
    isDeleted: false
  },
  {
    id: 3,
    forumId: 2,
    subject: "Single Topic",
    prefix: "",
    icon: "",
    pollId: null,
    userId: "uuid",
    username: "Elegant Totality",
    createdAt: /* @__PURE__ */ new Date(),
    updatedAt: /* @__PURE__ */ new Date(),
    firstPostId: 1,
    lastPostCreatedAt: /* @__PURE__ */ new Date(),
    lastPosterUsername: "Elegant Totality",
    lastPosterId: "uuid",
    views: 126,
    replies: 7,
    isClosed: false,
    isSticky: false,
    ratingsNumber: 3,
    ratingsTotal: 15,
    moderatorNotes: "",
    isDraft: false,
    isApproved: true,
    unapprovedPostsTotal: 0,
    attachmentTotal: 0,
    isDeleted: false
  },
  {
    id: 4,
    forumId: 2,
    subject: "Single Topic",
    prefix: "",
    icon: "",
    pollId: null,
    userId: "uuid",
    username: "Elegant Totality",
    createdAt: /* @__PURE__ */ new Date(),
    updatedAt: /* @__PURE__ */ new Date(),
    firstPostId: 1,
    lastPostCreatedAt: /* @__PURE__ */ new Date(),
    lastPosterUsername: "Elegant Totality",
    lastPosterId: "uuid",
    views: 100,
    replies: 35,
    isClosed: false,
    isSticky: false,
    ratingsNumber: 540,
    ratingsTotal: 2478,
    moderatorNotes: "",
    isDraft: false,
    isApproved: true,
    unapprovedPostsTotal: 0,
    attachmentTotal: 0,
    isDeleted: false
  },
  {
    id: 5,
    forumId: 2,
    subject: "Single Topic",
    prefix: "",
    icon: "",
    pollId: null,
    userId: "uuid",
    username: "Elegant Totality",
    createdAt: /* @__PURE__ */ new Date(),
    updatedAt: /* @__PURE__ */ new Date(),
    firstPostId: 1,
    lastPostCreatedAt: /* @__PURE__ */ new Date(),
    lastPosterUsername: "Elegant Totality",
    lastPosterId: "uuid",
    views: 100,
    replies: 35,
    isClosed: false,
    isSticky: false,
    ratingsNumber: 540,
    ratingsTotal: 2478,
    moderatorNotes: "",
    isDraft: false,
    isApproved: true,
    unapprovedPostsTotal: 0,
    attachmentTotal: 0,
    isDeleted: false
  },
  {
    id: 6,
    forumId: 2,
    subject: "Single Topic",
    prefix: "",
    icon: "",
    pollId: null,
    userId: "uuid",
    username: "Elegant Totality",
    createdAt: /* @__PURE__ */ new Date(),
    updatedAt: /* @__PURE__ */ new Date(),
    firstPostId: 1,
    lastPostCreatedAt: /* @__PURE__ */ new Date(),
    lastPosterUsername: "Elegant Totality",
    lastPosterId: "uuid",
    views: 100,
    replies: 35,
    isClosed: false,
    isSticky: false,
    ratingsNumber: 540,
    ratingsTotal: 2478,
    moderatorNotes: "",
    isDraft: false,
    isApproved: true,
    unapprovedPostsTotal: 0,
    attachmentTotal: 0,
    isDeleted: false
  },
  {
    id: 7,
    forumId: 2,
    subject: "Single Topic",
    prefix: "",
    icon: "",
    pollId: null,
    userId: "uuid",
    username: "Elegant Totality",
    createdAt: /* @__PURE__ */ new Date(),
    updatedAt: /* @__PURE__ */ new Date(),
    firstPostId: 1,
    lastPostCreatedAt: /* @__PURE__ */ new Date(),
    lastPosterUsername: "Elegant Totality",
    lastPosterId: "uuid",
    views: 100,
    replies: 35,
    isClosed: false,
    isSticky: false,
    ratingsNumber: 540,
    ratingsTotal: 2478,
    moderatorNotes: "",
    isDraft: false,
    isApproved: true,
    unapprovedPostsTotal: 0,
    attachmentTotal: 0,
    isDeleted: false
  },
  {
    id: 8,
    forumId: 2,
    subject: "Single Topic",
    prefix: "",
    icon: "",
    pollId: null,
    userId: "uuid",
    username: "Elegant Totality",
    createdAt: /* @__PURE__ */ new Date(),
    updatedAt: /* @__PURE__ */ new Date(),
    firstPostId: 1,
    lastPostCreatedAt: /* @__PURE__ */ new Date(),
    lastPosterUsername: "Elegant Totality",
    lastPosterId: "uuid",
    views: 100,
    replies: 35,
    isClosed: false,
    isSticky: false,
    ratingsNumber: 540,
    ratingsTotal: 2478,
    moderatorNotes: "",
    isDraft: false,
    isApproved: true,
    unapprovedPostsTotal: 0,
    attachmentTotal: 0,
    isDeleted: false
  },
  {
    id: 9,
    forumId: 2,
    subject: "Single Topic",
    prefix: "",
    icon: "",
    pollId: null,
    userId: "uuid",
    username: "Elegant Totality",
    createdAt: /* @__PURE__ */ new Date(),
    updatedAt: /* @__PURE__ */ new Date(),
    firstPostId: 1,
    lastPostCreatedAt: /* @__PURE__ */ new Date(),
    lastPosterUsername: "Elegant Totality",
    lastPosterId: "uuid",
    views: 100,
    replies: 35,
    isClosed: false,
    isSticky: false,
    ratingsNumber: 540,
    ratingsTotal: 2478,
    moderatorNotes: "",
    isDraft: false,
    isApproved: true,
    unapprovedPostsTotal: 0,
    attachmentTotal: 0,
    isDeleted: false
  },
  {
    id: 10,
    forumId: 2,
    subject: "Single Topic",
    prefix: "",
    icon: "",
    pollId: null,
    userId: "uuid",
    username: "Elegant Totality",
    createdAt: /* @__PURE__ */ new Date(),
    updatedAt: /* @__PURE__ */ new Date(),
    firstPostId: 1,
    lastPostCreatedAt: /* @__PURE__ */ new Date(),
    lastPosterUsername: "Elegant Totality",
    lastPosterId: "uuid",
    views: 100,
    replies: 35,
    isClosed: false,
    isSticky: false,
    ratingsNumber: 540,
    ratingsTotal: 2478,
    moderatorNotes: "",
    isDraft: false,
    isApproved: true,
    unapprovedPostsTotal: 0,
    attachmentTotal: 0,
    isDeleted: false
  }
];
var ThreadService = class {
  constructor(baseUrl) {
  }
  getLastNThreadsInForum(forumId, _n) {
    const allThreads = threads.filter((thread) => thread.forumId === forumId);
    return allThreads;
  }
  getThreadById(threadId) {
    const thread = threads.find((th) => th.id === threadId);
    return thread;
  }
};

// src/services/postService.ts
var posts = [
  {
    id: 1,
    threadId: 1,
    forumId: 2,
    userId: 1,
    username: "Elegant Totality",
    createdAt: /* @__PURE__ */ new Date(),
    content: "Lorem, y'know?",
    ipAddress: "IP address",
    longIpAddress: "Long IP address",
    includeSignature: true,
    editUId: 1,
    editedAt: /* @__PURE__ */ new Date(),
    isVisible: true
  }
];
var PostService = class {
  constructor(baseUrl) {
  }
  getPostById(postId) {
    const post = posts.find((p) => p.id === postId);
    return post;
  }
  getNPostsInThread(postId, _n) {
    const allPosts = posts.filter((post) => post.threadId === postId);
    return allPosts;
  }
  getThreadById(postId) {
    const post = posts.find((p) => p.id === postId);
    return post;
  }
};

// src/services/statsService.ts
var StatsService = class {
  constructor(baseUrl) {
  }
  getGlobalStats() {
    return {
      threadCount: 16,
      postCount: 140,
      memberCount: 4136121,
      mostOnlineAtOnce: 42749,
      mostOnlineAtOnceDate: /* @__PURE__ */ new Date()
    };
  }
  // recalculate totals if data is out of sync
  rebuildStats() {
    return;
  }
};

// src/services/userService.ts
var users = [
  {
    id: 1,
    username: "Elegant Totality",
    email: "my@email.com",
    password: "pleaseClap",
    role: "admin",
    avatar: "string",
    userTitle: "Administrator",
    website: "reactforums.com",
    birthday: "N/A",
    signature: "My awesome signature",
    postCount: 145,
    threadCount: 13,
    reputation: 3,
    warningPoints: 0,
    primaryUserGroup: "Administrator",
    registrationDate: /* @__PURE__ */ new Date(),
    lastactive: /* @__PURE__ */ new Date(),
    lastVisit: /* @__PURE__ */ new Date(),
    lastPost: /* @__PURE__ */ new Date(),
    allowMessages: true,
    allowMessagesFromBuddiesOnly: true,
    showBirthday: true,
    showSignatures: true,
    showAvatars: true,
    showQuickReply: true,
    isAway: true,
    awayReason: "string",
    postsPerPage: 10,
    threadsPerPage: 10,
    timezone: "string",
    language: "string",
    totalTimeOnline: 1e4,
    registrationIP: "string",
    lastIP: "string",
    failedLogins: 0,
    updatedDate: /* @__PURE__ */ new Date()
  },
  {
    id: 2,
    username: "Jeb Bush",
    email: "jeb@bush.com",
    password: "pleaseClap",
    role: "mod",
    avatar: "string",
    userTitle: "Smooth Moderator",
    website: "reactforums.com",
    birthday: "N/A",
    signature: "My awesomest signature",
    postCount: 145,
    threadCount: 13,
    reputation: 0,
    warningPoints: 0,
    primaryUserGroup: "Moderator",
    registrationDate: /* @__PURE__ */ new Date(),
    lastactive: /* @__PURE__ */ new Date(),
    lastVisit: /* @__PURE__ */ new Date(),
    lastPost: /* @__PURE__ */ new Date(),
    allowMessages: true,
    allowMessagesFromBuddiesOnly: true,
    showBirthday: true,
    showSignatures: true,
    showAvatars: true,
    showQuickReply: true,
    isAway: true,
    awayReason: "string",
    postsPerPage: 10,
    threadsPerPage: 10,
    timezone: "string",
    language: "string",
    totalTimeOnline: 1e4,
    registrationIP: "string",
    lastIP: "string",
    failedLogins: 0,
    updatedDate: /* @__PURE__ */ new Date()
  }
];
var UserService = class {
  constructor(baseUrl) {
  }
  latestUser() {
    return {
      username: "TexanWebPro"
    };
  }
  getUserInfo(userId) {
    const user = users.find((u) => u.id === userId);
    if (!user) return;
    return user;
  }
  getUserByUsername(username) {
    const user = users.find((u) => u.username === username);
    if (!user) return;
    return user;
  }
  getUserForProfileView(username) {
    const user = this.getUserByUsername(username);
    if (!user) return;
    const customProfileFieldsValues = profileFieldValues.filter(
      (val) => val.userId === (user == null ? void 0 : user.id)
    );
    return { ...user, profileFields: customProfileFieldsValues };
  }
  getUserReputations(userId) {
    const userReputations = allReputations.filter(
      (rep) => rep.userId === userId
    );
    return userReputations;
  }
};
var allReputations = [
  {
    id: 1,
    userId: 1,
    givingUserId: 2,
    postId: 1,
    count: 3,
    date: /* @__PURE__ */ new Date(),
    comments: "You're awesome for building reactForums!"
  },
  {
    id: 1,
    userId: 2,
    givingUserId: 1,
    postId: 2,
    count: 2,
    date: /* @__PURE__ */ new Date(),
    comments: "You're awesome for using reactForums!"
  },
  {
    id: 1,
    userId: 1,
    givingUserId: 2,
    postId: 2,
    count: -3,
    date: /* @__PURE__ */ new Date(),
    updatedAt: /* @__PURE__ */ new Date(),
    comments: "Your a poser"
  },
  {
    id: 1,
    userId: 1,
    givingUserId: 2,
    postId: 2,
    count: 0,
    date: /* @__PURE__ */ new Date(),
    comments: void 0
  }
];
var profileFieldValues = [
  {
    userId: 1,
    fieldId: 1,
    value: "Not the White House"
  },
  {
    userId: 1,
    fieldId: 2,
    value: "I was born at a very young age."
  },
  {
    userId: 1,
    fieldId: 3,
    value: "Male"
  }
];

// src/services/settingsService.ts
var SettingsService = class {
  constructor(baseUrl) {
  }
  getByName(name) {
    const settingsTable = [
      {
        id: 1,
        name: "bbname" /* BoardName */,
        value: "rF Community Forums",
        description: "The name of your community. We recommend that it is not over 75 characters.",
        groupId: 1
      },
      {
        id: 2,
        name: "board_description" /* BoardDescription */,
        value: "The future of forums.",
        description: "The description of your community.",
        groupId: 1
      },
      {
        id: 3,
        name: "board_url" /* BoardUrl */,
        value: "/",
        description: "The url of your community.",
        groupId: 1
      },
      {
        id: 4,
        name: "homepage_name" /* HomepageName */,
        value: "reactForums",
        description: "The name of your homepage. This will appear in the footer with a link to it.",
        groupId: 1
      },
      {
        id: 5,
        name: "homepage_url" /* HomepageUrl */,
        value: "https://reactforums.com",
        description: "The url of your homepage.",
        groupId: 1
      },
      {
        id: 6,
        name: "site_meta_title" /* SiteMetaTitle */,
        value: "reactForums | Next-Generation Community Software",
        description: "",
        groupId: 1
      },
      {
        id: 7,
        name: "site_meta_description" /* SiteMetaDescription */,
        value: "The official reactForums community for administrators to stay current with the latest core and platform updates, discuss forum management, exchange tips, and show off their sites.",
        description: "",
        groupId: 1
      },
      {
        id: 8,
        name: "favicon_url" /* FaviconUrl */,
        value: "/favicon-32x32.png",
        description: "",
        groupId: 1
      }
    ];
    return settingsTable.find((s) => s.name === name) ?? null;
  }
};

// src/services/profileFieldsService.ts
var ProfileFieldsService = class {
  constructor(baseUrl) {
  }
  getProfileFieldValue(fieldId) {
    const fieldValue = profileFields.find((field) => field.id === fieldId);
    if (!fieldValue) return;
    return fieldValue;
  }
};
var profileFields = [
  {
    id: 1,
    name: "Location",
    description: "Where are you located?",
    displayOrder: 1,
    type: "text",
    length: 5,
    maxLength: 45,
    canEdit: true,
    isHidden: false,
    isRequired: false
  },
  {
    id: 2,
    name: "Bio",
    description: "Tell us something about you.",
    displayOrder: 2,
    type: "textarea",
    length: 5,
    maxLength: 100,
    canEdit: true,
    isHidden: false,
    isRequired: false
  },
  {
    id: 3,
    name: "Sex",
    description: "What is your sex?",
    displayOrder: 3,
    type: "select",
    length: 0,
    maxLength: 0,
    canEdit: true,
    isHidden: false,
    isRequired: false
  }
];

// src/adapters/createForumAdapter.ts
function createForumAdapter(input) {
  if (!input.forum) {
    throw new Error("createForumAdapter: 'forum' repository is required");
  }
  return {
    forum: input.forum
  };
}
export {
  ForumService,
  PostService,
  ProfileFieldsService,
  SettingKey,
  SettingsService,
  StatsService,
  ThreadService,
  UserService,
  createForumAdapter
};
//# sourceMappingURL=index.mjs.map