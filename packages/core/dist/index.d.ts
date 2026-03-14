declare enum SettingKey {
    BoardName = "bbname",
    BoardDescription = "board_description",
    BoardUrl = "board_url",
    HomepageName = "homepage_name",
    HomepageUrl = "homepage_url",
    Timezone = "timezone",
    DefaultLanguage = "default_language",
    LogoUrl = "logo_url",
    FaviconUrl = "favicon_url",
    AllowRegistration = "allow_registration",
    RequireEmailVerification = "require_email_verification",
    DefaultUserRole = "default_user_role",
    MaxLoginAttempts = "max_login_attempts",
    PasswordMinLength = "password_min_length",
    UsernameMinLength = "username_min_length",
    UsernameMaxLength = "username_max_length",
    AllowGuestPosting = "allow_guest_posting",
    PostsRequireApproval = "posts_require_approval",
    ThreadsRequireApproval = "threads_require_approval",
    AttachmentsRequireApproval = "attachments_require_approval",
    CanModsEditPosts = "can_mods_edit",
    MaxAttachmentSizeMB = "max_attachment_size_mb",
    AllowedAttachmentTypes = "allowed_attachment_types",
    MaxPostLength = "max_post_length",
    MaxThreadLength = "max_thread_length",
    PostsPerPage = "posts_per_page",
    ThreadsPerPage = "threads_per_page",
    DateFormat = "date_format",
    ShowOnlineStatus = "show_online_status",
    ShowUserAvatars = "show_user_avatars",
    DefaultAvatarUrl = "default_avatar_url",
    SiteMetaTitle = "site_meta_title",
    SiteMetaDescription = "site_meta_description",
    SiteMetaKeywords = "site_meta_keywords",
    OpenGraphImageUrl = "open_graph_image_url",
    RobotsTxtContent = "robots_txt_content",
    SendEmailOnNewPost = "send_email_on_new_post",
    SendEmailOnNewThread = "send_email_on_new_thread",
    EmailFromAddress = "email_from_address",
    EmailSmtpHost = "email_smtp_host",
    EmailSmtpPort = "email_smtp_port",
    EmailSmtpUser = "email_smtp_user",
    EmailSmtpPassword = "email_smtp_password",
    EnableRecaptcha = "enable_recaptcha",
    RecaptchaSiteKey = "recaptcha_site_key",
    RecaptchaSecretKey = "recaptcha_secret_key",
    AnalyticsScript = "analytics_script",
    EnableWebSockets = "enable_websockets",
    MaxConcurrentUsers = "max_concurrent_users"
}
interface Setting {
    id: number;
    name: SettingKey;
    title: string;
    description: string;
    optionsCode: OptionsCode;
    value: string;
    displayOrder: number;
    groupId: number;
}
type OptionsCode = "text" | "textarea" | "yesno" | "onoff" | "numeric" | "select" | "radio" | "checkbox" | "forumselect" | "groupselect" | "language";
type Settings = Setting[];
type CreateUserInput = {
    username: string;
    email: string;
    password: string;
    registrationIp: string;
    lastIp: string;
};
interface User {
    id: number;
    username: string;
    email: string;
    password: string;
    role: "admin" | "mod" | "user" | "banned";
    avatar: string;
    userTitle: string | null;
    website: string | null;
    birthday: string | null;
    signature: string | null;
    postCount: number;
    threadCount: number;
    reputation: number;
    warningPoints: number;
    primaryUserGroup: string;
    registrationDate: Date;
    lastActive: Date;
    lastVisit: Date;
    lastPost: Date | null;
    allowMessages: boolean;
    allowMessagesFromFriendsOnly: boolean;
    showBirthday: boolean;
    showSignatures: boolean;
    showAvatars: boolean;
    showQuickReply: boolean;
    isAway: boolean;
    awayReason: string | null;
    postsPerPage: number;
    threadsPerPage: number;
    timezone: string;
    language: string | null;
    totalTimeOnline: number;
    registrationIp: string;
    lastIp: string;
    failedLogins: number;
    updatedDate: Date;
}
type Users = User[];
interface ForumStats {
    latestUser: Pick<User, "username">;
    threadCount: number;
    postCount: number;
    userCount: number;
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
    lastPostTime: Date | null;
    lastPostAuthor: string | null;
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
type Forums = Forum[];
interface CreateForumInput {
    isCategory: boolean;
    parentForumId?: number;
    name: string;
    description: string;
}
interface ForumTreeNode extends Forum {
    children?: ForumTreeNode[];
}
interface Thread {
    id: number;
    forumId: number;
    subject: string;
    prefixId: string | null;
    iconId: string | null;
    pollId: string | null;
    userId: number;
    username: string;
    createdAt: Date;
    updatedAt: Date;
    firstPostId: number | null;
    lastPostCreatedAt: Date | null;
    lastPosterUsername: string | null;
    lastPosterId: number | null;
    views: number;
    replies: number;
    isClosed: boolean;
    isSticky: boolean;
    ratingsNumber: number;
    ratingsTotal: number;
    moderatorNotes: string | null;
    isDraft: boolean;
    isApproved: boolean;
    unapprovedPostsTotal: number;
    attachmentTotal: number;
    isDeleted: boolean;
    deletedAt: Date | null;
}
type Threads = Thread[];
interface Post {
    id: number;
    threadId: number;
    parentPostId: number | null;
    forumId: number;
    subject: string | null;
    icon?: number;
    userId: number;
    username: string;
    createdAt: Date;
    content: string;
    ipAddress: string;
    longIpAddress: string;
    includeSignature: boolean;
    editUserId: number | null;
    updatedAt: Date;
    isDraft: boolean;
    isApproved: boolean;
}
type Posts = Post[];
interface Reputation {
    id: number;
    userId: number;
    givingUserId: number;
    postId: number | null;
    count: number;
    date: Date;
    updatedAt?: Date;
    comments?: string;
}
type Reputations = Reputation[];
interface CustomProfileField {
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
type CustomProfileFields = CustomProfileField[];
type CustomProfileFieldsValue = {
    userId: number;
    fieldId: number;
    value: string;
};
type UserProfileFieldValues = CustomProfileFieldsValue[];
type UserWithProfileFieldValues = User & {
    profileFields: UserProfileFieldValues;
};
interface Message {
}

interface ForumRepository {
    createForum(input: CreateForumInput): Promise<Forum | undefined>;
    getAllForums(): Promise<Forums>;
    getForumById(id: number): Promise<Forum | undefined>;
}

declare class ForumService {
    private repository;
    constructor(repository: ForumRepository);
    listAllForumsByCategory(): Promise<ForumTreeNode[]>;
    getBreadcrumbForumHierarchy(id: number): Promise<ForumTreeNode | undefined>;
    create(input: CreateForumInput): Promise<Forum | undefined>;
    buildTree(forums: Forums, parentId?: number | null): ForumTreeNode[];
}

interface ThreadRepository {
    getAllThreadsInForum(forumId: number, limit: number): Promise<Threads>;
    getThreadById(threadId: number): Promise<Thread | undefined>;
    countVisibleThreads(): Promise<number>;
}

declare class ThreadService {
    private repository;
    constructor(repository: ThreadRepository);
    getLastNThreadsInForum(forumId: number, limit: number): Promise<Threads>;
    getThreadById(threadId: number): Promise<Thread | undefined>;
}

interface PostRepository {
    getNPostsInThread(threadId: number, limit: number): Promise<Posts | undefined>;
    getPostById(postId: number): Promise<Post | undefined>;
    getPostReplies(postId: number): Promise<Posts | undefined>;
    countVisiblePosts(): Promise<number>;
}

declare class PostService {
    private repository;
    constructor(repository: PostRepository);
    getPostById(postId: number): Promise<Post | undefined>;
    getNPostsInThread(postId: number, n: number): Promise<Posts | undefined>;
    getPostReplies(postId: number): Promise<Posts | undefined>;
}

interface UserRepository {
    getLatestUser(): Promise<Pick<User, "username">>;
    getAllUsers(): Promise<Users>;
    getUserById(id: number): Promise<User>;
    getUserByUsername(username: string): Promise<User>;
    countVisibleUsers(): Promise<number>;
    createUser(input: CreateUserInput): Promise<User | undefined>;
}

declare class StatsService {
    private users;
    private threads;
    private posts;
    constructor(users: UserRepository, threads: ThreadRepository, posts: PostRepository);
    getGlobalStats(): Promise<ForumStats>;
}

declare class UserService {
    private repository;
    constructor(repository: UserRepository);
    latestUser(): Promise<Pick<User, "username">>;
    getUserInfo(userId: number): Promise<User | undefined>;
    getUserByUsername(username: string): Promise<User | undefined>;
    create(input: CreateUserInput): Promise<User | undefined>;
}

interface SettingsRepository {
    getAllSettings(): Promise<Settings>;
    getSettingByName(name: string): Promise<Setting | undefined>;
    getSettingsByNames(names: string[]): Promise<Settings | undefined>;
}

declare class SettingsService {
    private repository;
    constructor(repository: SettingsRepository);
    getByName(name: SettingKey): Promise<Setting | undefined>;
    getByNames(names: SettingKey[]): Promise<Settings | undefined>;
}

declare class ProfileFieldsService {
    constructor();
    getProfileFieldValue(fieldId: number): CustomProfileField;
}

interface ReactForumsAdapter {
    setting: SettingsRepository;
    user: UserRepository;
    forum: ForumRepository;
    thread: ThreadRepository;
    post: PostRepository;
}
interface ReactForumsAdapterInput {
    setting: SettingsRepository;
    user: UserRepository;
    forum: ForumRepository;
    thread: ThreadRepository;
    post: PostRepository;
}

declare function createForumAdapter(input: ReactForumsAdapterInput): ReactForumsAdapter;

export { type CreateForumInput, type CreateUserInput, type CustomProfileField, type CustomProfileFields, type CustomProfileFieldsValue, type Forum, type ForumRepository, ForumService, type ForumStats, type ForumTreeNode, type Forums, type Message, type OptionsCode, type Post, type PostRepository, PostService, type Posts, ProfileFieldsService, type ReactForumsAdapter, type ReactForumsAdapterInput, type Reputation, type Reputations, type Setting, SettingKey, type Settings, type SettingsRepository, SettingsService, StatsService, type Thread, type ThreadRepository, ThreadService, type Threads, type User, type UserProfileFieldValues, type UserRepository, UserService, type UserWithProfileFieldValues, type Users, createForumAdapter };
