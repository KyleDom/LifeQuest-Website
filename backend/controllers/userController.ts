const db = require("../database");
const auth = require("../auth");
const { v4: uuidv4 } = require("uuid");
const bcrypt = require("bcrypt");

module.exports.login = (req: any, res: any) => {
    let findUsername = `SELECT * FROM users where (username LIKE "${req.body.username}")`;

    db.query(findUsername, (err: any, result: any) => {
        if (err) return res.send("An error has occured.");
        if (result.length > 0) {
            let isPasswordCorrect = bcrypt.compareSync(req.body.password, result[0].password);

            if (isPasswordCorrect) {
                let createToken = {
                    id: result[0].id,
                    fullname: result[0].fullname,
                    bloodtype: result[0].bloodtype,
                    isAdmin: result[0].isAdmin,
                };

                let accessToken = auth.createWebToken(createToken);
                res.send({ accessToken: accessToken, response: true });
            } else {
                res.send({ status: "Password incorrect", response: false });
            };
        };
    });
};

module.exports.register = (req: any, res: any) => {
    let userData = {
        username: req.body.username,
        fullname: req.body.fullname,
        password: bcrypt.hashSync(req.body.password, 10),
        bloodType: req.body.bloodType,
        address: req.body.address,
        contact_number: req.body.contact_number,
        gender: req.body.gender,
        age: req.body.age,
        weight: req.body.weight,
        height: req.body.height,
    };

    let sql = `INSERT INTO users (uid, username, fullname, password, bloodType, address, contact_number, gender, age, weight, height) VALUES ("${uuidv4()}", "${userData.username}", "${userData.fullname}", "${userData.password}", "${userData.bloodType}", "${userData.address}", "${userData.contact_number}", "${userData.gender}", "${userData.age}", "${userData.weight}", "${userData.height})`;

    db.query(sql, (err: any, res: any) => {
        if (err) {
            res.send({ status: "Duplicate Found", error: err, response: false });
        } else {
            res.send({ status: "Successfully Registered", response: true });
        };
    });
};

module.exports.verifySession = (req: any, res: any) => {
    let userData = auth.decode(req.headers.authorization);
    if (userData.isAdmin === 1) {
        res.send({ response: true });
    } else {
        res.send({ response: false });
    };
};