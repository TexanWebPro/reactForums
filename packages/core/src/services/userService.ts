import { User } from "../domain/models";

export class UserService {
  constructor(baseUrl: string) {}

  latestUser(): Pick<User, "username"> {
    return {
      username: "TexanWebPro",
    };
  }
}
