import { Blood } from "../../bloodbank/blood";
import { BloodDAO } from "../DAO/BloodDAO";


export class BloodDAOImpl implements BloodDAO {
    private bloodBank: Map<number, Blood>; 

    constructor(bloodBank: Map<number, Blood>){
        this.bloodBank = bloodBank;
    }

    getAllBlood(): Map<number, Blood> {
        return this.bloodBank
    }

    getBloodById(id: number): Blood {
        return this.bloodBank.get(id)!;
    }

    addToBloodBank(blood: Blood): void {
        this.bloodBank.set(blood.getBloodId(), blood);
    }

    deleteFromBloodBank(blood: Blood): void {
        this.bloodBank.delete(blood.getBloodId())
    }
}