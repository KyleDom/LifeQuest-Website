"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    constructor(uid, fullname, username, password, bloodType, address, contact_number, gender, age, weight, height) {
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
    setUid(idInput) {
        this.uid = idInput;
    }
    getUid() {
        return this.uid;
    }
    setUsername(usernameInput) {
        this.username = usernameInput;
    }
    getUsername() {
        return this.username;
    }
    setPassword(passwordInput) {
        this.password = passwordInput;
    }
    getPassword() {
        return this.password;
    }
    setBloodtype(bloodTypeInput) {
        this.bloodType = bloodTypeInput;
    }
    getBloodType() {
        return this.bloodType;
    }
    setAddress(addressInput) {
        this.address = addressInput;
    }
    getAddress() {
        return this.address;
    }
    setContactNumber(contactInput) {
        this.contact_number = contactInput;
    }
    getContactNumber() {
        return this.contact_number;
    }
    setGender(gender) {
        this.gender = gender;
    }
    getGender() {
        return this.gender;
    }
    setAge(ageInput) {
        this.age = ageInput;
    }
    getAge() {
        return this.age;
    }
    setWeight(weightInput) {
        this.weight = weightInput;
    }
    getWeight() {
        return this.weight;
    }
    setHeight(HeightInput) {
        this.height = HeightInput;
    }
    getHeight() {
        return this.height;
    }
}
exports.User = User;
