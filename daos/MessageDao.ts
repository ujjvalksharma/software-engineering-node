import Message from "../models/Message";
import MessageModel from "../mongoose/MessageModel";
import MessageDaoI from "../interfaces/MessageDao";

export default class MessageDao implements MessageDaoI { 

    private static messageDao: MessageDao | null = null;

    public static getInstance = (): MessageDao => {
        if(MessageDao.messageDao === null) {
            MessageDao.messageDao = new MessageDao();
        }
        return MessageDao.messageDao;
    }
    private constructor() {}


  async createMessage(message: Message): Promise<Message> {
    return await MessageModel.create(message);
}

async deleteAMessage(messageId: string): Promise<any> {
    return await MessageModel.deleteOne({_id:messageId});
}

async getSentMessages(senderId: string): Promise<any> { //modify to get array of tuit
    return await MessageModel.find({to:senderId});
}

async getReceivedMessage(receiverId: string): Promise<any> { //modify to get array of tuit
    return await MessageModel.find({from:receiverId});
}

}