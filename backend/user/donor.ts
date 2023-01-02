import { Gender } from "./GenderEnums";
import { User } from "./user";

export class Donor extends User {
  private donorId: number;

  constructor(
    donorId: number,
    uid: number,
    username: string,
    password: string,
    bloodType: string,
    address: string,
    contact_number: string,
    gender: Gender,
    age: number,
    weight: number,
    height: number
  ) {
    super(
      uid,
      username,
      password,
      bloodType,
      address,
      contact_number,
      gender,
      age,
      weight,
      height
    );
    this.donorId = donorId;
  }

  private DonateBlood() {
    
  }

  public setDonorId(idInput: number) {
    this.donorId = idInput;
  }

  public getDonorId() {
    return this.donorId;
  }
}
