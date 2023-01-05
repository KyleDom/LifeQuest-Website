const jwt = require("jsonwebtoken");
const secret = "blooddonation";

module.exports.createWebToken = (user: any) => {
    const data = {
        uid: user.uid,
        fullname: user.fullname,
      };

    return jwt.sign(data, secret, {expiresIn: "24h"});
};

module.exports.authenticateToken = (req: any, res: any, next: any) => {
    const authHeader = req.headers.authorization;
    if (authHeader !== undefined) {
        let checkHeader = authHeader.split(" ")[1];
        return jwt.verify(checkHeader, secret, (err: Error, data: any) => {
            if (err) {
                return res.send({ auth: "Invalid token" });
            } else {
                next();
            }
        })
    } else {
        res.send({ message: "Auth failed! No token provided" });
    }
};

//DECODES to use Payload
module.exports.decode = (token: string) => {
    if (token !== undefined) {
        let jwtToken = token.split(" ")[1];
        return jwt.verify(jwtToken, secret, (err: any, data: any) => {
            let dataObject = jwt.decode(jwtToken, { complete: true }).payload;
            if (err) {
                return null;
            } else {
                return dataObject;
            }
        });
    } else {
        return null;
    }
};