import { UserDAO } from "../DAO/UserDAO";
import { User } from "../../user/user";


export class UserDAOImpl implements UserDAO {
  private userList: Map<number, User>;

  constructor(userList: Map<number, User>) {
    this.userList = userList;
  }

  getAllUsers(): Map<number, User> {
    return this.userList;
  }

  getUserById(id: number): User {
    return this.userList.get(id)!;
  }

  addUser(user: User): void {
    this.userList.set(user.getUid(), user);
  }

  deleteUser(user: User): void {
    this.userList.delete(user.getUid());
  }
}