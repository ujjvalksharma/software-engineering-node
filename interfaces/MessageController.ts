import {Request, Response} from "express";

export default interface MessageController {
    createMessage(req: Request, res: Response): void;
    deleteAMessage(req: Request, res: Response): void;
    getSentMessages(req: Request, res: Response): void;
    getReceivedMessage(req: Request, res: Response): void;
}