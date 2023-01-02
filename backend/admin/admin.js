"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Admin = void 0;
class Admin {
    constructor(adminId, username, password, contact_number, address, userList) {
        this.adminId = adminId;
        this.username = username;
        this.password = password;
        this.contact_number = contact_number;
        this.address = address;
        this.userList = userList;
    }
    setUid(idInput) {
        this.adminId = idInput;
    }
    getUid() {
        return this.adminId;
    }
    setUsername(usernameInput) {
        this.username = usernameInput;
    }
    getUsername() {
        return this.username;
    }
    setPassword(passwordInput) {
        this.password = passwordInput;
    }
    getPassword() {
        return this.password;
    }
    setContactNumber(contactInput) {
        this.contact_number = contactInput;
    }
    getContactNumber() {
        return this.contact_number;
    }
    setAddress(addressInput) {
        this.address = addressInput;
    }
    getAddress() {
        return this.address;
    }
    setUserList(userList) {
        this.userList = userList;
    }
    getUserList() {
        return this.userList;
    }
}
exports.Admin = Admin;
