import { Recipient } from "../../user/recipient";


export interface RecipientDAO {
  getAllRecipients(): Map<number, Recipient>;
  getRecipientById(id: number): Recipient;
  addRecipient(recipient: Recipient): void;
  deleteRecipient(recipient: Recipient): void;
}
