import { Blood } from "../../bloodbank/blood"

export interface BloodDAO {
    getAllBlood(): Map<number, Blood>
    getBloodById(id: string): Blood
    addToBloodBank(blood: Blood): void
    deleteFromBloodBank(blood: Blood): void
}