import {
  CreateUserInput,
  CustomProfileFieldsValue,
  User,
  UserRepository,
  Users,
} from "@reactforums/core";
import { desc, eq } from "drizzle-orm";
import { DrizzlePgDatabase } from "src/types";
import { ReactForumsDrizzleSchema } from "src";

export class DrizzleUserRepository<TSchema extends ReactForumsDrizzleSchema>
  implements UserRepository
{
  db: DrizzlePgDatabase;
  schema: TSchema;

  constructor(db: DrizzlePgDatabase, schema: TSchema) {
    this.db = db;
    this.schema = schema;
  }

  async createUser(input: CreateUserInput): Promise<User | undefined> {
    const usersTable = this.schema.users;
    const users = await this.db
      .insert(usersTable)
      .values({ ...input })
      .returning();
    const user = users[0];
    if (!user) return;
    return user as User;
  }

  async countVisibleUsers(): Promise<number> {
    const usersTable = this.schema.users;
    const users = await this.db.$count(usersTable);

    // TODO: clean this up after adding user account activation
    return users;
  }

  async getAllUsers(): Promise<Users> {
    const usersTable = this.schema.users;
    const users = await this.db.select().from(usersTable);
    return users as Users;
  }

  async getLatestUser(): Promise<User> {
    const usersTable = this.schema.users;
    const user = await this.db
      .select()
      .from(usersTable)
      .orderBy(desc(usersTable.registrationDate), desc(usersTable.id))
      .limit(1);
    return user[0] as User;
  }

  async getUserById(id: number): Promise<User> {
    const usersTable = this.schema.users;
    const user = await this.db
      .select()
      .from(usersTable)
      .where(eq(usersTable.id, id));
    return user[0] as User;
  }

  async getUserByUsername(username: string): Promise<User> {
    const usersTable = this.schema.users;
    const user = await this.db
      .select()
      .from(usersTable)
      .where(eq(usersTable.username, username));
    return user[0] as User;
  }

  //   getCustomProfileFieldsByUserId(
  //     id: number,
  //   ): Promise<CustomProfileFieldsValue[]> {}

  //   getUserReputations(userId: number): Promise<Reputations> {}
}
