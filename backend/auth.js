"use strict";
const jwt = require("jsonwebtoken");
const secret = "blooddonation";
module.exports.createWebToken = (user) => {
    const data = {
        id: user.id,
        fullname: user.fullname,
        bloodtype: user.bloodtype,
        isAdmin: user.isAdmin
    };
    return jwt.sign(data, secret, {});
};
module.exports.authenticateToken = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (authHeader !== undefined) {
        let checkHeader = authHeader.split(" ")[1];
        return jwt.verify(checkHeader, secret, (err, data) => {
            if (err) {
                return res.send({ auth: "Invalid token" });
            }
            else {
                next();
            }
        });
    }
    else {
        res.send({ message: "Auth failed! No token provided" });
    }
};
//DECODES to use Payload
module.exports.decode = (token) => {
    if (token !== undefined) {
        let jwtToken = token.split(" ")[1];
        return jwt.verify(jwtToken, secret, (err, data) => {
            let dataObject = jwt.decode(jwtToken, { complete: true }).payload;
            if (err) {
                return null;
            }
            else {
                return dataObject;
            }
        });
    }
    else {
        return null;
    }
};
