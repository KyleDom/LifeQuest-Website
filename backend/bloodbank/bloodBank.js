"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BloodBank = void 0;
class BloodBank {
    constructor(bloodBank_id, bloodStock) {
        this.bloodBank_id = bloodBank_id;
        this.bloodStock = bloodStock;
    }
    setBloodBankId(id) {
        this.bloodBank_id = id;
    }
    getBloodBankId() {
        return this.bloodBank_id;
    }
    setBloodStock(bloodStock) {
        this.bloodStock = bloodStock;
    }
    getBloodStock() {
        return this.bloodStock;
    }
}
exports.BloodBank = BloodBank;
