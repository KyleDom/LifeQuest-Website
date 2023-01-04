"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Donor = void 0;
var user_1 = require("./user");
var Donor = /** @class */ (function (_super) {
    __extends(Donor, _super);
    function Donor(donorId, uid, username, password, bloodType, address, contact_number, gender, age, weight, height) {
        var _this = _super.call(this, uid, username, password, bloodType, address, contact_number, gender, age, weight, height) || this;
        _this.donorId = donorId;
        return _this;
    }
    Donor.prototype.DonateBlood = function () {
    };
    Donor.prototype.setDonorId = function (idInput) {
        this.donorId = idInput;
    };
    Donor.prototype.getDonorId = function () {
        return this.donorId;
    };
    return Donor;
}(user_1.User));
exports.Donor = Donor;
