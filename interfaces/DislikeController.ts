import {Request, Response} from "express";
/**
 * @file This acts an interface for like api
 */
export default interface DislikeController {
     /**
     * Dislike a tuit
     * @param req request object
     * @param res response object
     */
    dislikeATuit(req: Request, res: Response): void;
    /**
     * Get tuits disliked by a user
     * @param req request object
     * @param res response object
     */
    findTuitsDislikedByAUser(req: Request, res: Response): void;
     /**
     * Get users who disliked a tuit
     * @param req request object
     * @param res response object
     */
    findUsersThatDislikedATuid(req: Request, res: Response): void;
}


