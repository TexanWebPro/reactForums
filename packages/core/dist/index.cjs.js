var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  ForumService: () => ForumService,
  PostService: () => PostService,
  ProfileFieldsService: () => ProfileFieldsService,
  SettingKey: () => SettingKey,
  SettingsService: () => SettingsService,
  StatsService: () => StatsService,
  ThreadService: () => ThreadService,
  UserService: () => UserService,
  createForumAdapter: () => createForumAdapter
});
module.exports = __toCommonJS(index_exports);

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
  constructor(repository) {
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
  async create(input) {
    const forum = await this.repository.createForum(input);
    return forum;
  }
  buildTree(forums, parentId = null) {
    return forums.filter((f) => f.parentForumId === parentId).map((f) => ({ ...f, children: this.buildTree(forums, f.id) }));
  }
};

// src/services/threadService.ts
var ThreadService = class {
  constructor(repository) {
    this.repository = repository;
  }
  async getLastNThreadsInForum(forumId, limit) {
    const threads = await this.repository.getAllThreadsInForum(forumId, limit);
    return threads;
  }
  async getThreadById(threadId) {
    const threads = await this.repository.getThreadById(threadId);
    return threads;
  }
  async create(input) {
    const thread = await this.repository.createThread(input);
    return thread;
  }
};

// src/services/postService.ts
var PostService = class {
  constructor(repository) {
    this.repository = repository;
  }
  async getPostById(postId) {
    const post = await this.repository.getPostById(postId);
    return post;
  }
  async getNPostsInThread(postId, n) {
    const allPosts = await this.repository.getNPostsInThread(postId, n);
    return allPosts;
  }
  async getPostReplies(postId) {
    const allReplies = await this.repository.getPostReplies(postId);
    return allReplies;
  }
  // buildTree(posts: Posts, parentId: number | null = null): PostTreeNode[] {
  //   return posts
  //     .filter((p) => p.parentPostId === parentId)
  //     .map((p) => ({ ...p, children: this.buildTree(posts, p.id) }));
  // }
};

// src/services/statsService.ts
var StatsService = class {
  constructor(users, threads, posts) {
    this.users = users;
    this.threads = threads;
    this.posts = posts;
  }
  async getGlobalStats() {
    const [userCount, threadCount, postCount, latestUser] = await Promise.all([
      this.users.countVisibleUsers(),
      this.threads.countVisibleThreads(),
      this.posts.countVisiblePosts(),
      this.users.getLatestUser()
    ]);
    return {
      latestUser,
      userCount,
      threadCount,
      postCount,
      mostOnlineAtOnce: 42749,
      // TODO: update after AuthService
      mostOnlineAtOnceDate: /* @__PURE__ */ new Date()
      // TODO: update after AuthService
    };
  }
};

// src/services/userService.ts
var UserService = class {
  constructor(repository) {
    this.repository = repository;
  }
  async latestUser() {
    const user = await this.repository.getLatestUser();
    return user;
  }
  async getUserInfo(userId) {
    const user = await this.repository.getUserById(userId);
    if (!user) return;
    return user;
  }
  async getUserByUsername(username) {
    const user = await this.repository.getUserByUsername(username);
    if (!user) return;
    return user;
  }
  async create(input) {
    const user = await this.repository.createUser(input);
    if (!user) return;
    return user;
  }
  // async getUserForProfileView(
  //   username: string,
  // ): Promise<UserWithProfileFieldValues | undefined> {
  //   const user = await this.getUserByUsername(username);
  //   if (!user) return;
  //   const customProfileFieldsValues =
  //     await this.repository.getCustomProfileFieldsByUserId(user.id);
  //   return { ...user, profileFields: customProfileFieldsValues };
  // }
  // //
  // async getUserReputations(userId: number): Promise<Reputation[]> {
  //   const userReputations = await this.repository.getUserReputations(userId);
  //   return userReputations;
  // }
};

// src/services/settingsService.ts
var SettingsService = class {
  constructor(repository) {
    this.repository = repository;
  }
  async getByName(name) {
    const setting = await this.repository.getSettingByName(name);
    return setting;
  }
  async getByNames(names) {
    const settings = await this.repository.getSettingsByNames(names);
    return settings;
  }
};

// src/services/profileFieldsService.ts
var ProfileFieldsService = class {
  constructor() {
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
  if (!input.setting) {
    throw new Error("createForumAdapter: 'setting' repository is required");
  }
  if (!input.user) {
    throw new Error("createForumAdapter: 'user' repository is required");
  }
  if (!input.forum) {
    throw new Error("createForumAdapter: 'forum' repository is required");
  }
  if (!input.thread) {
    throw new Error("createForumAdapter: 'thread' repository is required");
  }
  if (!input.post) {
    throw new Error("createForumAdapter: 'post' repository is required");
  }
  return {
    setting: input.setting,
    user: input.user,
    forum: input.forum,
    thread: input.thread,
    post: input.post
  };
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ForumService,
  PostService,
  ProfileFieldsService,
  SettingKey,
  SettingsService,
  StatsService,
  ThreadService,
  UserService,
  createForumAdapter
});
//# sourceMappingURL=index.cjs.js.map