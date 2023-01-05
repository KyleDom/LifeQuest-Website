import { Donor } from "../../user/donor";
import { DonorDAO } from "../DAO/DonorDAO";

export class DonorDAOImpl implements DonorDAO {
  private donorList: Map<number, Donor>;

  constructor(donorList: Map<number, Donor>) {
    this.donorList = donorList;
  }

  getAllDonors(): Map<number, Donor> {
    return this.donorList;
  }

  getDonorById(id: string): Donor {
    return this.donorList.get(id)!
  }

  addDonor(donor: Donor): void {
    this.donorList.set(donor.getDonorId(), donor);
  }

  deleteDonor(donor: Donor): void {
    this.donorList.delete(donor.getDonorId());
  }
}
