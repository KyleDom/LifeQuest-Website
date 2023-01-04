"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const { User, userInterface, getUser } = require("../user/user");
const db = require("../database");
const auth = require("../auth");
const { v4: uuidv4 } = require("uuid");
const bcrypt = require("bcrypt");
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield getUser(req.body.username);
    if (user === false) {
        return res.send({ message: "Username not found", response: false });
    }
    let userToLogin = new User(...Object.values(user[0]));
    const response = userToLogin.login(req.body.password);
    res.send(response);
});
const register = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userData = {
        fullname: req.body.fullname,
        username: req.body.username,
        password: bcrypt.hashSync(req.body.password, 10),
        bloodType: req.body.bloodType,
        address: req.body.address,
        contact_number: req.body.contact_number,
        gender: req.body.gender,
        age: req.body.age,
        weight: req.body.weight,
        height: req.body.height,
    };
    const newUser = new User(uuidv4(), ...Object.values(userData));
    const response = yield newUser.register();
    if (response[0]) {
        res.send({ response: true, message: response[1] });
    }
    else {
        res.send({ response: false, message: response[1] });
    }
    ;
});
const verifySession = (req, res) => {
    let userData = auth.decode(req.headers.authorization);
    if (userData.isAdmin === 1) {
        res.send({ response: true });
    }
    else {
        res.send({ response: false });
    }
    ;
};
module.exports = {
    login,
    register,
    verifySession,
};
