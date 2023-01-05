"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAdminDetails = exports.Admin = void 0;
const bcrypt = require("bcrypt");
const auth = require("../auth");
const db = require("../database");
class Admin {
    constructor(adminId, username, fullname, password, contact_number, address, userList, donorList, recipientList, bloodBank) {
        this.adminId = adminId;
        this.username = username;
        this.fullname = fullname;
        this.password = password;
        this.contact_number = contact_number;
        this.address = address;
        this.userList = userList;
        this.donorList = donorList;
        this.recipientList = recipientList;
        this.bloodBank = bloodBank;
    }
    login(pw) {
        let isPasswordCorrect = bcrypt.compareSync(pw, this.password);
        if (isPasswordCorrect) {
            let createToken = {
                uid: this.adminId,
                fullname: this.fullname,
            };
            let accessToken = auth.createWebToken(createToken);
            return {
                accessToken: accessToken,
                response: true,
            };
        }
        return { status: "Password incorrect", response: false };
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
    setDonorList(donorList) {
        this.donorList = donorList;
    }
    getDonorList() {
        return this.donorList;
    }
    setRecipientList(recipientList) {
        this.recipientList = recipientList;
    }
    getRecipientList() {
        return this.recipientList;
    }
    setBloodBank(bloodBank) {
        this.bloodBank = bloodBank;
    }
    getBloodBank() {
        return this.bloodBank;
    }
}
exports.Admin = Admin;
const getAdminDetails = (usn = null, id = null) => {
    if (usn !== null) {
        let findUsername = `SELECT * FROM admin where (username LIKE "${usn}")`;
        let promise = new Promise((resolve, reject) => {
            db.query(findUsername, (err, result) => {
                if (err) {
                    return reject(false);
                }
                if (result.length > 0) {
                    return resolve(result);
                }
                else {
                    return reject(false);
                }
            });
        })
            .then((res) => {
            return res;
        })
            .catch((err) => {
            return err;
        });
        return promise;
    }
    // Determine if user is admin
    if (id !== null) {
        let findId = `SELECT * FROM admin where (admin_id LIKE "${id}")`;
        let promise = new Promise((resolve, reject) => {
            db.query(findId, (err, result) => {
                if (err) {
                    return reject(false);
                }
                if (result.length > 0) {
                    return resolve(true);
                }
                else {
                    return reject(false);
                }
            });
        })
            .then((res) => {
            return res;
        })
            .catch((err) => {
            return err;
        });
        return promise;
    }
};
exports.getAdminDetails = getAdminDetails;
