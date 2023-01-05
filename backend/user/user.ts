const db = require("../database");
const auth = require("../auth");
const bcrypt = require("bcrypt");
import { Gender } from "./GenderEnums";

export interface userInterface {
  uid?: string;
  fullname: string;
  username: string;
  password: string;
  bloodType: string;
  address: string;
  contact_number: string;
  gender: Gender;
  age: number;
  weight: number;
  height: number;
}
export class User {
  private uid: string;
  private fullname: string;
  private username: string;
  private password: string;
  private bloodType: string;
  private address: string;
  private contact_number: string;
  private gender: Gender;
  private age: number;
  private weight: number;
  private height: number;

  constructor(
    uid: string,
    fullname: string,
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
    this.uid = uid;
    this.fullname = fullname;
    this.username = username;
    this.password = password;
    this.bloodType = bloodType;
    this.address = address;
    this.contact_number = contact_number;
    this.gender = gender;
    this.age = age;
    this.height = height;
    this.weight = weight;
  }

  public login(pw: string) {
    let isPasswordCorrect = bcrypt.compareSync(pw, this.password);

    if (isPasswordCorrect) {
      let createToken = {
        uid: this.uid,
        fullname: this.fullname,
      };

      let accessToken = auth.createWebToken(createToken);
      return {
        accessToken: accessToken,
        response: true,
      };
    }
    return { status: "Password incorrect", response: false };
  }

  public setUid(idInput: string) {
    this.uid = idInput;
  }

  public register() {
    let sql = `INSERT INTO users (uid,fullname, username, password, bloodType, address, contact_number, gender, age, height, weight) VALUES (${JSON.stringify(
      Object.values(this)
    ).slice(1, -1)})`;

    let response = new Promise((resolve, reject) => {
      db.query(sql, (err: any) => {
        if (err) {
          return reject([false, "DUPLICATE/WRONG ENTRY"]);
        }
        return resolve([true, "OK"]);
      });
    })
      .then((res) => {
        return res;
      })
      .catch((error) => {
        return error;
      });

    return response;
  }

  public getUid() {
    return this.uid;
  }

  public setUsername(usernameInput: string) {
    this.username = usernameInput;
  }

  public getUsername() {
    return this.username;
  }

  public setPassword(passwordInput: string) {
    this.password = passwordInput;
  }
  public getPassword() {
    return this.password;
  }

  public setBloodtype(bloodTypeInput: string) {
    this.bloodType = bloodTypeInput;
  }

  public getBloodType() {
    return this.bloodType;
  }

  public setAddress(addressInput: string) {
    this.address = addressInput;
  }

  public getAddress() {
    return this.address;
  }

  public setContactNumber(contactInput: string) {
    this.contact_number = contactInput;
  }

  public getContactNumber() {
    return this.contact_number;
  }

  public setGender(gender: Gender) {
    this.gender = gender;
  }

  public getGender() {
    return this.gender;
  }

  public setAge(ageInput: number) {
    this.age = ageInput;
  }

  public getAge() {
    return this.age;
  }

  public setWeight(weightInput: number) {
    this.weight = weightInput;
  }

  public getWeight() {
    return this.weight;
  }

  public setHeight(HeightInput: number) {
    this.height = HeightInput;
  }

  public getHeight() {
    return this.height;
  }
}

export const getUserDetails = (
  usn: string | null = null
) => {
 
    let findUsername = `SELECT * FROM users where (username LIKE "${usn}")`;

    let promise = new Promise((resolve, reject) => {
      db.query(findUsername, (err: any, result: any) => {
        if (err) {
          return reject(false);
        }
        if (result.length > 0) {
          return resolve(result);
        } else {
          return reject(false);
        }
      });
    })
      .then((res) => {
        return res;
      })
      .catch((err) => {
        return err;
      });
    return promise;
  

};
