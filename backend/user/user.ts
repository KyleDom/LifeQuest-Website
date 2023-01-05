export class User {
  private uid: string;
  private fullname: string;
  private username: string;
  private password: string;
  private bloodType: string;
  private address: string;
  private contact_number: string;
  private gender: string;
  private age: number;
  private weight: number;
  private height: number;

  constructor(
    uid:string,
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

  public setUid(idInput: string) {
    this.uid = idInput;
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

  public setGender(gender: string) {
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


