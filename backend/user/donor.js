"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Donor = void 0;
const user_1 = require("./user");
class Donor extends user_1.User {
    constructor(donorId, uid, fullname, username, password, bloodType, address, contact_number, gender, age, weight, height) {
        super(uid, fullname, username, password, bloodType, address, contact_number, gender, age, weight, height);
        this.donorId = donorId;
    }
    DonateBlood() {
    }
    setDonorId(idInput) {
        this.donorId = idInput;
    }
    getDonorId() {
        return this.donorId;
    }
}
exports.Donor = Donor;
