export enum SettingKey {
  // Global / Board Info
  BoardName = "bbname",
  BoardDescription = "board_description",
  BoardUrl = "board_url",
  HomepageName = "homepage_name",
  HomepageUrl = "homepage_url",
  Timezone = "timezone",
  DefaultLanguage = "default_language",
  LogoUrl = "logo_url",
  FaviconUrl = "favicon_url",

  // User / Registration
  AllowRegistration = "allow_registration",
  RequireEmailVerification = "require_email_verification",
  DefaultUserRole = "default_user_role",
  MaxLoginAttempts = "max_login_attempts",
  PasswordMinLength = "password_min_length",
  UsernameMinLength = "username_min_length",
  UsernameMaxLength = "username_max_length",
  AllowGuestPosting = "allow_guest_posting",

  // Posting / Moderation
  PostsRequireApproval = "posts_require_approval",
  ThreadsRequireApproval = "threads_require_approval",
  AttachmentsRequireApproval = "attachments_require_approval",
  CanModsEditPosts = "can_mods_edit",
  MaxAttachmentSizeMB = "max_attachment_size_mb",
  AllowedAttachmentTypes = "allowed_attachment_types",
  MaxPostLength = "max_post_length",
  MaxThreadLength = "max_thread_length",

  // Display / UI
  PostsPerPage = "posts_per_page",
  ThreadsPerPage = "threads_per_page",
  DateFormat = "date_format",
  ShowOnlineStatus = "show_online_status",
  ShowUserAvatars = "show_user_avatars",
  DefaultAvatarUrl = "default_avatar_url",

  // SEO / Social
  SiteMetaTitle = "site_meta_title",
  SiteMetaDescription = "site_meta_description",
  SiteMetaKeywords = "site_meta_keywords",
  OpenGraphImageUrl = "open_graph_image_url",
  RobotsTxtContent = "robots_txt_content",

  // Notifications / Email
  SendEmailOnNewPost = "send_email_on_new_post",
  SendEmailOnNewThread = "send_email_on_new_thread",
  EmailFromAddress = "email_from_address",
  EmailSmtpHost = "email_smtp_host",
  EmailSmtpPort = "email_smtp_port",
  EmailSmtpUser = "email_smtp_user",
  EmailSmtpPassword = "email_smtp_password",

  // Integrations / Advanced
  EnableRecaptcha = "enable_recaptcha",
  RecaptchaSiteKey = "recaptcha_site_key",
  RecaptchaSecretKey = "recaptcha_secret_key",
  AnalyticsScript = "analytics_script",
  EnableWebSockets = "enable_websockets",
  MaxConcurrentUsers = "max_concurrent_users",
}

export interface Setting {
  id: number;
  name: SettingKey;
  value: string;
  description: string;
  groupId: number;
}

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
