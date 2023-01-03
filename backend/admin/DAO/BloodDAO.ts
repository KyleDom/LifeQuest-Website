import { Blood } from "../../bloodbank/blood"

export interface BloodDAO {
    getAllBlood(): Map<number, Blood>
    getBloodById(id: number): Blood
    addToBloodBank(blood: Blood): void
    deleteFromBloodBank(blood: Blood): void
}