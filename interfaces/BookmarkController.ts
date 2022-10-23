import {Request, Response} from "express";

export default interface BookmarkController {
    bookmarkATuit(req: Request, res: Response): void;
    unBookmarkATuit(req: Request, res: Response): void;
    findTuitsBookmarkedByAUser(req: Request, res: Response): void;
    findUsersThatBookmarkedATuid(req: Request, res: Response): void;
}


