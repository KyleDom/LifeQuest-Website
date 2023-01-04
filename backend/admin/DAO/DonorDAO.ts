import { Donor } from "../../user/donor";
export interface DonorDAO {
  getAllDonors(): Map<number, Donor>;
  getDonorById(id: number): Donor;
  addDonor(donor: Donor): void;
  deleteDonor(donor: Donor): void;
}
