"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DonorDAOImpl = void 0;
class DonorDAOImpl {
    constructor(donorList) {
        this.donorList = donorList;
    }
    getAllDonors() {
        return this.donorList;
    }
    getDonorById(id) {
        return this.donorList.get(id);
    }
    addDonor(donor) {
        this.donorList.set(donor.getDonorId(), donor);
    }
    deleteDonor(donor) {
        this.donorList.delete(donor.getDonorId());
    }
}
exports.DonorDAOImpl = DonorDAOImpl;
