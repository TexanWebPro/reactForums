import { Reputations, User, Users } from "../domain/models";

export interface UserRepository {
  getLatestUser(): Promise<User>;
  getAllUsers(): Promise<Users>;
  getUserById(id: number): Promise<User>;
  getUserByUsername(username: string): Promise<User>;

  getUserReputations(userId: number): Promise<Reputations>;
}
