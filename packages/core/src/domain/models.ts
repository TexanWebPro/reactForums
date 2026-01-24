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
  id: number;
  username: string;
  email: string;
  password: string;
  role: "admin" | "mod" | "user" | "banned";
  avatar: string;
  userTitle: string;
  website: string;
  birthday: string;
  signature: string;
  postCount: number;
  threadCount: number;
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

export type Users = User[];

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
  lastPostTime: Date | null;
  lastPostAuthor: string | null; // user ID
  lastPostThreadId: number | null;
  lastPostThreadSubject: string | null;
  rulesTitle: string | null;
  rules: string | null;
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

export type Forums = Forum[];

export interface ForumTreeNode extends Forum {
  children?: ForumTreeNode[];
}

export interface Thread {
  id: number;
  forumId: number;
  subject: string;
  prefix: string;
  icon: string;
  pollId: null;
  userId: string;
  username: string;
  createdAt: Date;
  updatedAt: Date;
  firstPostId: number;
  lastPostCreatedAt: Date;
  lastPosterUsername: string;
  lastPosterId: string;
  views: number;
  replies: number;
  isClosed: boolean;
  isSticky: boolean;
  ratingsNumber: number;
  ratingsTotal: number;
  moderatorNotes: string;
  isDraft: boolean;
  isApproved: boolean;
  unapprovedPostsTotal: number;
  attachmentTotal: number;
  isDeleted: boolean;
}

export interface Post {
  id: number;
  threadId: number;
  replyToId?: number;
  forumId: number;
  subject?: string;
  icon?: number;
  userId: number;
  username: string;
  createdAt: Date;
  content: string;
  ipAddress: string;
  longIpAddress: string;
  includeSignature: boolean;
  editUId: number;
  editedAt: Date;
  isVisible: boolean;
}

export interface Reputation {
  id: number;
  userId: number; // id of the user receiving the reputation
  givingUserId: number; // id of the user giving the reputation
  postId: number | null; // post id for reputation given in relation to a post
  count: number; // ammount given in this one instance
  date: Date;
  updatedAt?: Date;
  comments?: string;
}

export type Reputations = Reputation[];

export interface CustomProfileField {
  id: number;
  name: string;
  description: string;
  displayOrder: number;
  type: "text" | "textarea" | "select" | "checkbox";
  length: number;
  maxLength: number;
  canEdit: boolean;
  isHidden: boolean;
  isRequired: boolean;
}

export type CustomProfileFields = CustomProfileField[];

export type CustomProfileFieldsValue = {
  userId: number;
  fieldId: number; // custom field ID to which this value belongs
  value: string;
};

export type UserProfileFieldValues = CustomProfileFieldsValue[];
export type UserWithProfileFieldValues = User & {
  profileFields: UserProfileFieldValues;
};
