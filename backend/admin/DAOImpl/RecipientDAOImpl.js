"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecipientDAOImpl = void 0;
class RecipientDAOImpl {
    constructor(recipientList) {
        this.recipientList = recipientList;
    }
    getAllRecipients() {
        return this.recipientList;
    }
    getRecipientById(id) {
        return this.recipientList.get(id);
    }
    addRecipient(recipient) {
        this.recipientList.set(recipient.getRecipientId(), recipient);
    }
    deleteRecipient(recipient) {
        this.recipientList.delete(recipient.getRecipientId());
    }
}
exports.RecipientDAOImpl = RecipientDAOImpl;
