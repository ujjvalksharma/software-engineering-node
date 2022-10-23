import {Request, Response, Express} from "express";
import MessageDao from "../daos/MessageDao";
import MessageControllerI from "../interfaces/MessageController";

export default class MessageController implements MessageControllerI {

    private static messageDao: MessageDao = MessageDao.getInstance();
    private static messageController: MessageController | null = null;

    public static getInstance = (app: Express): MessageController => {

        if(MessageController.messageController === null) {
            MessageController.messageController = new MessageController();
            app.post("/messages", MessageController.messageController.createMessage);
            app.delete("/messages/:messageId", MessageController.messageController.deleteAMessage);   
            app.get("/messages/sender/:senderId", MessageController.messageController.getSentMessages); 
            app.get("/messages/recevier/:recevierId", MessageController.messageController.getReceivedMessage);
            app.get("/messages/test", MessageController.messageController.messageTest);
        }
        return MessageController.messageController;
    }

    private constructor() {}


    createMessage = (req: Request, res: Response) => MessageController.messageDao.createMessage(req.body)
           .then(message => res.json(message)); 

           deleteAMessage = (req: Request, res: Response) => MessageController.messageDao.deleteAMessage(req.params.messageId)
           .then(status => res.json(status));

           getSentMessages = (req: Request, res: Response) => MessageController.messageDao.getSentMessages(req.params.senderId)
           .then(messages => res.json(messages));

           getReceivedMessage = (req: Request, res: Response)=> MessageController.messageDao.getReceivedMessage(req.params.recevierId)
           .then(messages => res.json(messages));

           messageTest =(req: Request, res: Response) =>{
               res.send('like is working!!')
           }

}
