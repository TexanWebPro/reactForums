import {
  Reputation,
  User,
  UserProfileFieldValues,
  UserWithProfileFieldValues,
} from "../domain/models";

const users: User[] = [
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
    registrationDate: new Date(),
    lastactive: new Date(),
    lastVisit: new Date(),
    lastPost: new Date(),
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
    totalTimeOnline: 10000,
    registrationIP: "string",
    lastIP: "string",
    failedLogins: 0,
    updatedDate: new Date(),
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
    registrationDate: new Date(),
    lastactive: new Date(),
    lastVisit: new Date(),
    lastPost: new Date(),
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
    totalTimeOnline: 10000,
    registrationIP: "string",
    lastIP: "string",
    failedLogins: 0,
    updatedDate: new Date(),
  },
];

export class UserService {
  constructor(baseUrl: string) {}

  latestUser(): Pick<User, "username"> {
    return {
      username: "TexanWebPro",
    };
  }

  getUserInfo(userId: number): User | undefined {
    const user = users.find((u) => u.id === userId);
    if (!user) return;
    return user;
  }

  getUserByUsername(username: string): User | undefined {
    const user = users.find((u) => u.username === username);
    if (!user) return;
    return user;
  }

  getUserForProfileView(
    username: string
  ): UserWithProfileFieldValues | undefined {
    const user = this.getUserByUsername(username);
    if (!user) return;
    const customProfileFieldsValues = profileFieldValues.filter(
      (val) => val.userId === user?.id
    );

    return { ...user, profileFields: profileFieldValues };
  }

  getUserReputations(userId: number): Reputation[] {
    const userReputations = allReputations.filter(
      (rep) => rep.userId === userId
    );
    return userReputations;
  }
}

const allReputations = [
  {
    id: 1,
    userId: 1,
    givingUserId: 2,
    postId: 1,
    count: 3,
    date: new Date(),
    comments: "You're awesome for building reactForums!",
  },
  {
    id: 1,
    userId: 2,
    givingUserId: 1,
    postId: 2,
    count: 2,
    date: new Date(),
    comments: "You're awesome for using reactForums!",
  },
  {
    id: 1,
    userId: 1,
    givingUserId: 2,
    postId: 2,
    count: -3,
    date: new Date(),
    updatedAt: new Date(),
    comments: "Your a poser",
  },
  {
    id: 1,
    userId: 1,
    givingUserId: 2,
    postId: 2,
    count: 0,
    date: new Date(),
    comments: undefined,
  },
];

const profileFieldValues: UserProfileFieldValues = [
  {
    userId: 1,
    fieldId: 1,
    value: "Not the White House",
  },
  {
    userId: 1,
    fieldId: 2,
    value: "I was born at a very young age.",
  },
  {
    userId: 1,
    fieldId: 3,
    value: "Male",
  },
];
