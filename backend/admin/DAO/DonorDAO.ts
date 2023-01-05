import { Donor } from "../../user/donor";
export interface DonorDAO {
  getAllDonors(): Map<string, Donor>;
  getDonorById(id: string): Donor;
  addDonor(donor: Donor): void;
  deleteDonor(donor: Donor): void;
}
