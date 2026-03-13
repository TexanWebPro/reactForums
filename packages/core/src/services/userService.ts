import {
  CreateUserInput,
  Reputation,
  User,
  UserProfileFieldValues,
  UserWithProfileFieldValues,
} from "../domain/models";
import { UserRepository } from "../repositories/UserRepository";

export class UserService {
  constructor(private repository: UserRepository) {}

  async latestUser(): Promise<Pick<User, "username">> {
    const user = await this.repository.getLatestUser();
    return user;
  }

  async getUserInfo(userId: number): Promise<User | undefined> {
    const user = await this.repository.getUserById(userId);
    if (!user) return;
    return user;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const user = await this.repository.getUserByUsername(username);
    if (!user) return;
    return user;
  }

  async create(input: CreateUserInput): Promise<User | undefined> {
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
}
