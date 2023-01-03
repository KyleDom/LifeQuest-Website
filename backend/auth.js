var jwt = require("jsonwebtoken");
var secret = "blooddonation";
module.exports.createWebToken = function (user) {
    var data = {
        id: user.id,
        fullname: user.fullname,
        bloodtype: user.bloodtype,
        isAdmin: user.isAdmin
    };
    return jwt.sign(data, secret, {});
};
module.exports.authenticateToken = function (req, res, next) {
    var authHeader = req.headers.authorization;
    if (authHeader !== undefined) {
        var checkHeader = authHeader.split(" ")[1];
        return jwt.verify(checkHeader, secret, function (err, data) {
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
module.exports.decode = function (token) {
    if (token !== undefined) {
        var jwtToken_1 = token.split(" ")[1];
        return jwt.verify(jwtToken_1, secret, function (err, data) {
            var dataObject = jwt.decode(jwtToken_1, { complete: true }).payload;
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
