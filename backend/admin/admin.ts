import { User } from "../user/user";

export class Admin {
  private adminId: number;
  private username: string;
  private password: string;
  private contact_number: string;
  private address: string;
  private userList: Map<number, User>;

  constructor(
    adminId: number,
    username: string,
    password: string,
    contact_number: string,
    address: string,
    userList: Map<number, User>
  ) {
    this.adminId = adminId;
    this.username = username;
    this.password = password;
    this.contact_number = contact_number;
    this.address = address;
    this.userList = userList;
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
}
