import { Blood } from "../../bloodbank/blood";
import { BloodDAO } from "../DAO/BloodDAO";

export class BloodDAOImpl implements BloodDAO {
    private bloodBank: Map<string, Blood>; 

    constructor(bloodBank: Map<string, Blood>){
        this.bloodBank = bloodBank;
    }

    getAllBlood(): Map<string, Blood> {
        return this.bloodBank
    }

    getBloodById(id: string): Blood {
        return this.bloodBank.get(id)!;
    }

    addToBloodBank(blood: Blood): void {
        this.bloodBank.set(blood.getBloodId(), blood);
    }

    deleteFromBloodBank(blood: Blood): void {
        this.bloodBank.delete(blood.getBloodId())
    }
}