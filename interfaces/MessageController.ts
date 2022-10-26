import {Request, Response} from "express";
/**
 * @file This file acts an interface for Message api
 */
export default interface MessageController {
    /**
     * Create a message
     * @param req request body
     * @param res response body
     */
    createMessage(req: Request, res: Response): void;
    /**
     * delete a message
     * @param req request body
     * @param res response body
     */
    deleteAMessage(req: Request, res: Response): void;
       /**
     * Get messages sent by a user
     * @param req request body
     * @param res response body
     */
    getSentMessages(req: Request, res: Response): void;
     /**
     * Get messages received by a user
     * @param req request body
     * @param res response body
     */
    getReceivedMessage(req: Request, res: Response): void;
}