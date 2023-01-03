import { Blood } from "./blood";

export class BloodBank {
    private bloodBank_id: number;
    private bloodStock: Map<number, Blood>;

    constructor(bloodBank_id: number, bloodStock: Map<number, Blood>){
        this.bloodBank_id = bloodBank_id;
        this.bloodStock = bloodStock;
    }

    public setBloodBankId(id: number){
        this.bloodBank_id = id;
    }

    public getBloodBankId(){
        return this.bloodBank_id;
    }

    public setBloodStock(bloodStock: Map<number, Blood>){
        this.bloodStock = bloodStock
    }

    public getBloodStock(){
        return this.bloodStock;
    }

}