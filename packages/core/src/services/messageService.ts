import { Message } from "../domain/models";
import { MessageRepository } from "../repositories/MessageRepository";

export class MessageService {
  constructor(private repository: MessageRepository) {}

  async getMessageById(messageId: number): Promise<Message | undefined> {
    const post = await this.repository.getMessageById(messageId);
    return post;
  }
}
