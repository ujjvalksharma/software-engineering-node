import Message from "../models/Message";

export default interface MessageDao {
   createMessage(message: Message): Promise<Message>;
   deleteAMessage(messageId: string): Promise<any>;
   getSentMessages(senderId: string): Promise<Message[]>;
   getReceivedMessage(receiveId: string): Promise<Message[]>;
}
