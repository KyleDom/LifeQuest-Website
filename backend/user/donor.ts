import { Gender } from "./GenderEnums";
import { User } from "./user";

export class Donor extends User {
  private donorId: string;

  constructor(
    donorId: string,
    uid: string,
    fullname: string,
    username: string,
    password: string,
    bloodType: string,
    address: string,
    contact_number: string,
    gender: string,
    age: number,
    weight: number,
    height: number
  ) {
    super(
      uid,
      fullname,
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

  public setDonorId(idInput: string) {
    this.donorId = idInput;
  }

  public getDonorId() {
    return this.donorId;
  }
}
