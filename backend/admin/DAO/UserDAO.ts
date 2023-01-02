import { User } from "../../user/user";

export interface UserDAO {
  getAllUsers(): Map<number, User>;
  getUserById(id: number): User;
  addUser(user: User): void;
  deleteUser(user: User): void;
}
