"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserDetails = exports.User = void 0;
const db = require("../database");
const auth = require("../auth");
const bcrypt = require("bcrypt");
class User {
    constructor(uid, fullname, username, password, bloodType, address, contact_number, gender, age, weight, height) {
        this.uid = uid;
        this.fullname = fullname;
        this.username = username;
        this.password = password;
        this.bloodType = bloodType;
        this.address = address;
        this.contact_number = contact_number;
        this.gender = gender;
        this.age = age;
        this.height = height;
        this.weight = weight;
    }
    login(pw) {
        let isPasswordCorrect = bcrypt.compareSync(pw, this.password);
        if (isPasswordCorrect) {
            let createToken = {
                uid: this.uid,
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
        this.uid = idInput;
    }
    register() {
        let sql = `INSERT INTO users (uid,fullname, username, password, bloodType, address, contact_number, gender, age, height, weight) VALUES (${JSON.stringify(Object.values(this)).slice(1, -1)})`;
        let response = new Promise((resolve, reject) => {
            db.query(sql, (err) => {
                if (err) {
                    return reject([false, "DUPLICATE/WRONG ENTRY"]);
                }
                return resolve([true, "OK"]);
            });
        })
            .then((res) => {
            return res;
        })
            .catch((error) => {
            return error;
        });
        return response;
    }
    getUid() {
        return this.uid;
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
    setBloodtype(bloodTypeInput) {
        this.bloodType = bloodTypeInput;
    }
    getBloodType() {
        return this.bloodType;
    }
    setAddress(addressInput) {
        this.address = addressInput;
    }
    getAddress() {
        return this.address;
    }
    setContactNumber(contactInput) {
        this.contact_number = contactInput;
    }
    getContactNumber() {
        return this.contact_number;
    }
    setGender(gender) {
        this.gender = gender;
    }
    getGender() {
        return this.gender;
    }
    setAge(ageInput) {
        this.age = ageInput;
    }
    getAge() {
        return this.age;
    }
    setWeight(weightInput) {
        this.weight = weightInput;
    }
    getWeight() {
        return this.weight;
    }
    setHeight(HeightInput) {
        this.height = HeightInput;
    }
    getHeight() {
        return this.height;
    }
}
exports.User = User;
const getUserDetails = (usn = null) => {
    let findUsername = `SELECT * FROM users where (username LIKE "${usn}")`;
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
};
exports.getUserDetails = getUserDetails;
