"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BloodDAOImpl = void 0;
class BloodDAOImpl {
    constructor(bloodBank) {
        this.bloodBank = bloodBank;
    }
    getAllBlood() {
        return this.bloodBank;
    }
    getBloodById(id) {
        return this.bloodBank.get(id);
    }
    addToBloodBank(blood) {
        this.bloodBank.set(blood.getBloodId(), blood);
    }
    deleteFromBloodBank(blood) {
        this.bloodBank.delete(blood.getBloodId());
    }
}
exports.BloodDAOImpl = BloodDAOImpl;
