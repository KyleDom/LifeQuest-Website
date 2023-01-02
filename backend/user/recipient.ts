import { Gender } from "./GenderEnums";
import { User } from "./user";

export class Recipient extends User {
  private recipientId: number;

  constructor(
    recipientId: number,
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
    this.recipientId = recipientId;
  }

  private applyForBlood() {}

  public setRecipientId(idInput: number) {
    this.recipientId = idInput;
  }

  public getRecipientId() {
    return this.recipientId;
  }
}
