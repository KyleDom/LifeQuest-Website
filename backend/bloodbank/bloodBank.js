"use strict";
exports.__esModule = true;
exports.BloodBank = void 0;
var BloodBank = /** @class */ (function () {
    function BloodBank(bloodBank_id, bloodStock) {
        this.bloodBank_id = bloodBank_id;
        this.bloodStock = bloodStock;
    }
    BloodBank.prototype.setBloodBankId = function (id) {
        this.bloodBank_id = id;
    };
    BloodBank.prototype.getBloodBankId = function () {
        return this.bloodBank_id;
    };
    BloodBank.prototype.setBloodStock = function (bloodStock) {
        this.bloodStock = bloodStock;
    };
    BloodBank.prototype.getBloodStock = function () {
        return this.bloodStock;
    };
    return BloodBank;
}());
exports.BloodBank = BloodBank;
