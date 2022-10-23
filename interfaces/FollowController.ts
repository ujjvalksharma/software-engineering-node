import {Request, Response} from "express";

export default interface FollowController {
    createFollow(req: Request, res: Response): void;
    deleteFollow(req: Request, res: Response): void;
    getFollowingOfAUser(req: Request, res: Response): void;
    getFollowersOfAUser(req: Request, res: Response): void;
}