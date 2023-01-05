import { Blood } from "../bloodbank/blood";
import { Donor } from "../user/donor";
import { Recipient } from "../user/recipient";
import { User } from "../user/user";
const bcrypt = require("bcrypt");
const auth = require("../auth");
const db = require("../database");
export class Admin {
  private adminId: string;
  private username: string;
  private fullname: string;
  private password: string;
  private contact_number: string;
  private address: string;
  private userList: Map<number, User>;
  private donorList: Map<number, Donor>;
  private recipientList: Map<number, Recipient>;
  private bloodBank: Map<number, Blood>;

  constructor(
    adminId: string,
    username: string,
    fullname: string,
    password: string,
    contact_number: string,
    address: string,
    userList: Map<number, User>,
    donorList: Map<number, Donor>,
    recipientList: Map<number, Recipient>,
    bloodBank: Map<number, Blood>
  ) {
    this.adminId = adminId;
    this.username = username;
    this.fullname = fullname;
    this.password = password;
    this.contact_number = contact_number;
    this.address = address;
    this.userList = userList;
    this.donorList = donorList;
    this.recipientList = recipientList;
    this.bloodBank = bloodBank;
  }

  public login(pw: string) {
    let isPasswordCorrect = bcrypt.compareSync(pw, this.password);
    
    if (isPasswordCorrect) {
      let createToken = {
        uid: this.adminId,
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
    this.adminId = idInput;
  }

  public getUid() {
    return this.adminId;
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

  public setContactNumber(contactInput: string) {
    this.contact_number = contactInput;
  }

  public getContactNumber() {
    return this.contact_number;
  }

  public setAddress(addressInput: string) {
    this.address = addressInput;
  }

  public getAddress() {
    return this.address;
  }

  public setUserList(userList: Map<number, User>) {
    this.userList = userList;
  }

  public getUserList() {
    return this.userList;
  }

  public setDonorList(donorList: Map<number, Donor>) {
    this.donorList = donorList;
  }

  public getDonorList() {
    return this.donorList;
  }

  public setRecipientList(recipientList: Map<number, Recipient>) {
    this.recipientList = recipientList;
  }

  public getRecipientList() {
    return this.recipientList;
  }

  public setBloodBank(bloodBank: Map<number, Blood>) {
    this.bloodBank = bloodBank;
  }

  public getBloodBank() {
    return this.bloodBank;
  }
}

export const getAdminDetails = (
  usn: string | null = null,
  id: string | null = null
) => {
  if (usn !== null) {
    let findUsername = `SELECT * FROM admin where (username LIKE "${usn}")`;

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
  }

  // Determine if user is admin
  if (id !== null) {
    let findId = `SELECT * FROM admin where (admin_id LIKE "${id}")`;

    let promise = new Promise((resolve, reject) => {
      db.query(findId, (err: any, result: any) => {
        if (err) {
          return reject(false);
        }
        if (result.length > 0) {
          return resolve(true);
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
  }
};
