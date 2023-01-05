import { Recipient } from "../../user/recipient";
import { RecipientDAO } from "../DAO/RecipientDAO";

export class RecipientDAOImpl implements RecipientDAO {
  private recipientList: Map<number, Recipient>;

  constructor(recipientList: Map<number, Recipient>) {
    this.recipientList = recipientList;
  }

  getAllRecipients(): Map<number, Recipient> {
    return this.recipientList;
  }

  getRecipientById(id: string): Recipient {
    return this.recipientList.get(id)!;
  }

  addRecipient(recipient: Recipient): void {
    this.recipientList.set(recipient.getRecipientId(), recipient);
  }

  deleteRecipient(recipient: Recipient): void {
    this.recipientList.delete(recipient.getRecipientId());
  }
}