import { Recipient } from "../../user/recipient";
import { RecipientDAO } from "../DAO/RecipientDAO";

export class RecipientDAOImpl implements RecipientDAO {
  private recipientList: Map<string, Recipient>;

  constructor(recipientList: Map<string, Recipient>) {
    this.recipientList = recipientList;
  }

  getAllRecipients(): Map<string, Recipient> {
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