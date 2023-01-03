import { Blood } from "../bloodbank/blood";
import { Donor } from "../user/donor";
import { Recipient } from "../user/recipient";
import { User } from "../user/user";

export class Admin {
  private adminId: number;
  private username: string;
  private password: string;
  private contact_number: string;
  private address: string;
  private userList: Map<number, User>;
  private donorList: Map<number, Donor>;
  private recipientList: Map<number, Recipient>;
  private bloodBank: Map<number, Blood>

  constructor(
    adminId: number,
    username: string,
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
    this.password = password;
    this.contact_number = contact_number;
    this.address = address;
    this.userList = userList;
    this.donorList = donorList;
    this.recipientList = recipientList;
    this.bloodBank = bloodBank;

  }

  public setUid(idInput: number) {
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

  public setBloodBank(bloodBank:  Map<number, Blood>){
    this.bloodBank = bloodBank;
  }

  public getBloodBank(){
    return this.bloodBank
  }
    
}
