"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Blood = void 0;
class Blood {
    constructor(blood_id, blood_type, donor) {
        this.blood_id = blood_id;
        this.blood_type = blood_type;
        this.donor = donor;
    }
    setBloodId(id) {
        this.blood_id = id;
    }
    getBloodId() {
        return this.blood_id;
    }
    setBloodType(bloodType) {
        this.blood_type = bloodType;
    }
    getBloodType() {
        return this.blood_type;
    }
    setDonor(donor) {
        this.donor = donor;
    }
    getDonor(donor) {
        return this.donor;
    }
}
exports.Blood = Blood;
