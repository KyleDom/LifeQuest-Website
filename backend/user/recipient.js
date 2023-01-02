"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Recipient = void 0;
const user_1 = require("./user");
class Recipient extends user_1.User {
    constructor(recipientId, uid, username, password, bloodType, address, contact_number, gender, age, weight, height) {
        super(uid, username, password, bloodType, address, contact_number, gender, age, weight, height);
        this.recipientId = recipientId;
    }
    applyForBlood() { }
    setRecipientId(idInput) {
        this.recipientId = idInput;
    }
    getRecipientId() {
        return this.recipientId;
    }
}
exports.Recipient = Recipient;
