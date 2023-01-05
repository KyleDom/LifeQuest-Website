import { Gender } from "./GenderEnums";
import { User } from "./user";

export class Recipient extends User {
  private recipientId: string;

  constructor(
    recipientId: string,
    fullname: string,
    uid: string,
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
    this.recipientId = recipientId;
  }

  private applyForBlood() {}

  public setRecipientId(idInput: string) {
    this.recipientId = idInput;
  }

  public getRecipientId() {
    return this.recipientId;
  }
}
