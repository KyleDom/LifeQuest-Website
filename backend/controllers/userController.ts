import { userInterface } from "../user/user";
const { User, userInterface, getUser } = require("../user/user");
const db = require("../database");
const auth = require("../auth");
const bcrypt = require("bcrypt");

const login = async (req: any, res: any) => {
    const user = await getUser(req.body.username);

    if (user === false) {
        return res.send({ message: "Username not found", response: false });
    }

    let userToLogin = new User(...Object.values(user[0]));
    const response = userToLogin.login(req.body.password);
    res.send(response);
}

const register = async (req: any, res: any) => {
    const userData: userInterface = {
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

    const newUser = new User(...Object.values(userData));

    const response = await newUser.register();

    if (response[0]) {
        res.send({ response: true, message: response[1] });
    } else {
        res.send({ response: false, message: response[1] });
    };
};

const verifySession = (req: any, res: any) => {
    let userData = auth.decode(req.headers.authorization);
    if (userData.isAdmin === 1) {
        res.send({ response: true });
    } else {
        res.send({ response: false });
    };
};

module.exports = {
    login,
    register,
    verifySession,
}