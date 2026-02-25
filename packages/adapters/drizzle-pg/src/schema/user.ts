import { sql } from "drizzle-orm";
import {
  boolean,
  integer,
  pgTable,
  serial,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";

export const userSchema = pgTable("rf_users", {
  id: serial("id").primaryKey().notNull(),
  username: varchar("username").notNull().unique(),
  password: varchar("password").notNull(),
  email: varchar("email").notNull().unique(),
  role: varchar("role").notNull().default("user"),
  avatar: varchar("avatar").notNull().default("/default-avatar.jpg"),
  userTitle: varchar("user_title"),
  website: varchar("website"),
  birthday: varchar("birthday"),
  signature: varchar("signature"),
  postCount: integer().notNull().default(0),
  threadCount: integer().notNull().default(0),
  reputation: integer().notNull().default(0),
  warningPoints: integer().notNull().default(0),
  primaryUserGroup: varchar("primary_user_group").notNull().default("User"),
  registrationDate: timestamp("registration_date")
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
  lastActive: timestamp("last_active")
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
  lastVisit: timestamp("last_visit")
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
  lastPost: timestamp("last_post"),
  allowMessages: boolean("allow_messages").notNull().default(true),
  allowMessagesFromFriendsOnly: boolean("allow_messages_from_friends_only")
    .notNull()
    .default(false),
  showBirthday: boolean("show_birthday").notNull().default(true),
  showSignatures: boolean("show_signatures").notNull().default(true),
  showAvatars: boolean("show_avatars").notNull().default(true),
  showQuickReply: boolean("show_quick_reply").notNull().default(true),
  isAway: boolean("is_away").notNull().default(false),
  awayReason: varchar("away_reason"),
  postsPerPage: integer("posts_per_page").notNull().default(10),
  threadsPerPage: integer("threads_per_page").notNull().default(10),
  timezone: varchar("timezone").notNull().default("CST"),
  language: varchar("language"),
  totalTimeOnline: integer("total_time_online").notNull().default(0),
  registrationIp: varchar("registration_ip").notNull(),
  lastIp: varchar("last_ip").notNull(),
  failedLogins: integer("failed_logins").notNull().default(0),
  updatedDate: timestamp("updated_date")
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
});
