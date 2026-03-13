import { Message } from "../domain/models";

export interface MessageRepository {
  getMessageById(messageId: number): Promise<Message | undefined>;
}
