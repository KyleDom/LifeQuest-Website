import { User } from "../../user/user";

export interface UserDAO {
  getAllUsers(): Map<string, User>;
  getUserById(id: string): User;
  addUser(user: User): void;
  deleteUser(user: User): void;
}
