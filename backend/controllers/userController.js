var db = require("../database");
var auth = require("../auth");
var uuidv4 = require("uuid").v4;
var bcrypt = require("bcrypt");
module.exports.login = function (req, res) {
    var findUsername = "SELECT * FROM users where (username LIKE \"".concat(req.body.username, "\")");
    db.query(findUsername, function (err, result) {
        if (err)
            return res.send("An error has occured.");
        if (result.lenght > 0) {
            var isPasswordCorrect = bcrypt.compareSync(req.body.password, result[0].password);
            if (isPasswordCorrect) {
                var createToken = {
                    id: result[0].id,
                    fullname: result[0].fullname,
                    bloodtype: result[0].bloodtype,
                    isAdmin: result[0].isAdmin
                };
                var accessToken = auth.createWebToken(createToken);
                res.send({ accessToken: accessToken, response: true });
            }
            else {
                res.send({ status: "Password incorrect", response: false });
            }
            ;
        }
        ;
    });
};
module.exports.register = function (req, res) {
    var userData = {
        username: req.body.username,
        fullname: req.body.fullname,
        password: bcrypt.hashSync(req.body.password, 10),
        bloodType: req.body.bloodType,
        address: req.body.address,
        contact_number: req.body.contact_number,
        gender: req.body.gender,
        age: req.body.age,
        weight: req.body.weight,
        height: req.body.height
    };
    var sql = "INSERT INTO users (uid, username, fullname, password, bloodType, address, contact_number, gender, age, weight, height) VALUES (\"".concat(uuidv4(), "\", \"").concat(userData.username, "\", \"").concat(userData.fullname, "\", \"").concat(userData.password, "\", \"").concat(userData.bloodType, "\", \"").concat(userData.address, "\", \"").concat(userData.contact_number, "\", \"").concat(userData.gender, "\", \"").concat(userData.age, "\", \"").concat(userData.weight, "\", \"").concat(userData.height, ")");
    db.query(sql, function (err, res) {
        if (err) {
            res.send({ status: "Duplicate Found", error: err, response: false });
        }
        else {
            res.send({ status: "Successfully Registered", response: true });
        }
        ;
    });
};
module.exports.verifySession = function (req, res) {
    var userData = auth.decode(req.headers.authorization);
    if (userData.isAdmin === 1) {
        res.send({ response: true });
    }
    else {
        res.send({ response: false });
    }
    ;
};
