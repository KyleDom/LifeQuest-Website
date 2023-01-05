import { Donor } from "../user/donor";

export class Blood {
    private blood_id: string;
    private blood_type: string; 
    private donor: Donor;

    constructor(blood_id: string, blood_type: string, donor: Donor){
        this.blood_id = blood_id;
        this.blood_type = blood_type
        this.donor = donor
    }

    public setBloodId(id: string){
        this.blood_id = id;
    }

    public getBloodId(){
        return this.blood_id;
    }

    public setBloodType(bloodType: string){
        this.blood_type = bloodType;
    }

    public getBloodType(){
        return this.blood_type;
    }

    public setDonor(donor: Donor){
        this.donor = donor;
    }

    public getDonor(donor: Donor){
        return this.donor;
    }
}