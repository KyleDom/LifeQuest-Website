"use strict";
exports.__esModule = true;
exports.Blood = void 0;
var Blood = /** @class */ (function () {
    function Blood(blood_id, blood_type, donor) {
        this.blood_id = blood_id;
        this.blood_type = blood_type;
        this.donor = donor;
    }
    Blood.prototype.setBloodId = function (id) {
        this.blood_id = id;
    };
    Blood.prototype.getBloodId = function () {
        return this.blood_id;
    };
    Blood.prototype.setBloodType = function (bloodType) {
        this.blood_type = bloodType;
    };
    Blood.prototype.getBloodType = function () {
        return this.blood_type;
    };
    Blood.prototype.setDonor = function (donor) {
        this.donor = donor;
    };
    Blood.prototype.getDonor = function (donor) {
        return this.donor;
    };
    return Blood;
}());
exports.Blood = Blood;
