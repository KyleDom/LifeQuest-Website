import { Donor } from "../../user/donor";
import { User } from "../../user/user";

export interface DonorDAO {
  getAllDonors(): Map<number, Donor>;
  getDonorById(id: number): Donor;
  addDonor(donor: Donor): void;
  deleteDonor(donor: Donor): void;
}
