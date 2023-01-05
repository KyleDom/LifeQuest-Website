import { Blood } from "../../bloodbank/blood"

export interface BloodDAO {
    getAllBlood(): Map<string, Blood>
    getBloodById(id: string): Blood
    addToBloodBank(blood: Blood): void
    deleteFromBloodBank(blood: Blood): void
}