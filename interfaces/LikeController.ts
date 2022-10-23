import {Request, Response} from "express";

export default interface LikeController {
    likeATuit(req: Request, res: Response): void;
    dislikeATuit(req: Request, res: Response): void;
    findTuitsLikedByAUser(req: Request, res: Response): void;
    findUsersThatLikedATuid(req: Request, res: Response): void;
}


