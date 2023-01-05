import { UserDAO } from "../DAO/UserDAO";
import { User } from "../../user/user";


export class UserDAOImpl implements UserDAO {
  private userList: Map<string, User>;

  constructor(userList: Map<string, User>) {
    this.userList = userList;
  }

  getAllUsers(): Map<string, User> {
    return this.userList;
  }

  getUserById(id: string): User {
    return this.userList.get(id)!;
  }

  addUser(user: User): void {
    this.userList.set(user.getUid(), user);
  }

  deleteUser(user: User): void {
    this.userList.delete(user.getUid());
  }
}