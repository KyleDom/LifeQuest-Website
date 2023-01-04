"use strict";
exports.__esModule = true;
exports.getUser = exports.User = void 0;
var db = require("../database");
var auth = require("../../auth");
var bcrypt = require("bcrypt");
var User = /** @class */ (function () {
    function User(uid, fullname, username, password, bloodType, address, contact_number, gender, age, weight, height) {
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
    User.prototype.login = function (pw) {
        var isPasswordCorrect = bcrypt.compareSync(pw, this.password);
        if (isPasswordCorrect) {
            var createToken = {
                uid: this.uid,
                fullname: this.fullname,
                bloodType: this.bloodType,
                isAdmin: 0
            };
            var accessToken = auth.createWebToken(createToken);
            return {
                accessToken: accessToken,
                isAdmin: 0,
                response: true
            };
        }
        return { status: "Password incorrect", response: false };
    };
    User.prototype.setUid = function (idInput) {
        this.uid = idInput;
    };
    User.prototype.register = function () {
        var sql = "INSERT INTO users (uid, fullname, username, password, bloodType, address, contact_number, gender, age, height, weight) VALUES (".concat(JSON.stringify(Object.values(this)).slice(1, -1), ")");
        var response = new Promise(function (resolve, reject) {
            db.query(sql, function (err) {
                if (err) {
                    return reject([false, "DUPLICATE/WROND ENTRY"]);
                }
                ;
            });
        })
            .then(function (res) {
            return res;
        })["catch"](function (error) {
            return error;
        });
        return response;
    };
    User.prototype.getUid = function () {
        return this.uid;
    };
    User.prototype.setUsername = function (usernameInput) {
        this.username = usernameInput;
    };
    User.prototype.getUsername = function () {
        return this.username;
    };
    User.prototype.setPassword = function (passwordInput) {
        this.password = passwordInput;
    };
    User.prototype.getPassword = function () {
        return this.password;
    };
    User.prototype.setBloodtype = function (bloodTypeInput) {
        this.bloodType = bloodTypeInput;
    };
    User.prototype.getBloodType = function () {
        return this.bloodType;
    };
    User.prototype.setAddress = function (addressInput) {
        this.address = addressInput;
    };
    User.prototype.getAddress = function () {
        return this.address;
    };
    User.prototype.setContactNumber = function (contactInput) {
        this.contact_number = contactInput;
    };
    User.prototype.getContactNumber = function () {
        return this.contact_number;
    };
    User.prototype.setGender = function (gender) {
        this.gender = gender;
    };
    User.prototype.getGender = function () {
        return this.gender;
    };
    User.prototype.setAge = function (ageInput) {
        this.age = ageInput;
    };
    User.prototype.getAge = function () {
        return this.age;
    };
    User.prototype.setWeight = function (weightInput) {
        this.weight = weightInput;
    };
    User.prototype.getWeight = function () {
        return this.weight;
    };
    User.prototype.setHeight = function (HeightInput) {
        this.height = HeightInput;
    };
    User.prototype.getHeight = function () {
        return this.height;
    };
    return User;
}());
exports.User = User;
var getUser = function (usn, pw) {
    var findUsername = "SELECT * FROM users where (username LIKE \"".concat(usn, "\")");
    var promise = new Promise(function (resolve, reject) {
        db.query(findUsername, function (err, result) {
            if (err) {
                return reject(false);
            }
            ;
            if (result.length > 0) {
                return resolve(result);
            }
            else {
                return reject(false);
            }
        });
    })
        .then(function (res) {
        return res;
    })["catch"](function (err) {
        return err;
    });
    return promise;
};
exports.getUser = getUser;
