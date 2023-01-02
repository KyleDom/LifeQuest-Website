"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserDAOImpl = void 0;
class UserDAOImpl {
    constructor(userList) {
        this.userList = userList;
    }
    getAllUsers() {
        return this.userList;
    }
    getUserById(id) {
        return this.userList.get(id);
    }
    addUser(user) {
        this.userList.set(user.getUid(), user);
    }
    deleteUser(user) {
        this.userList.delete(user.getUid());
    }
}
exports.UserDAOImpl = UserDAOImpl;
