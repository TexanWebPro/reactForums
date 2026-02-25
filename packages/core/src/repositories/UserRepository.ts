import {
  CustomProfileFieldsValue,
  Reputations,
  User,
  Users,
} from "../domain/models";

export interface UserRepository {
  getLatestUser(): Promise<Pick<User, "username">>;
  getAllUsers(): Promise<Users>;
  getUserById(id: number): Promise<User>;
  getUserByUsername(username: string): Promise<User>;
  // getCustomProfileFieldsByUserId(
  //   id: number,
  // ): Promise<CustomProfileFieldsValue[]>;

  // getUserReputations(userId: number): Promise<Reputations>;
}
