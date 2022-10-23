import {Request, Response, Express} from "express";
import BookmarkDao from "../daos/BookmarkDao";
import BookmarkControllerI from "../interfaces/BookmarkController";

export default class BookmarkController implements BookmarkControllerI {

    private static bookmarkDao: BookmarkDao = BookmarkDao.getInstance();
    private static bookmarkController: BookmarkController | null = null;

    public static getInstance = (app: Express): BookmarkController => {

        if(BookmarkController.bookmarkController === null) {
            BookmarkController.bookmarkController = new BookmarkController();
            app.post("/users/:uid/bookmarks/:tid", BookmarkController.bookmarkController.bookmarkATuit);
            app.delete("/users/:uid/bookmarks/:tid", BookmarkController.bookmarkController.unBookmarkATuit);   
            app.get("/users/:uid/bookmarks", BookmarkController.bookmarkController.findTuitsBookmarkedByAUser); 
            app.get("/tuits/:tid/bookmarks", BookmarkController.bookmarkController.findUsersThatBookmarkedATuid);
            app.get("/bookmarks/test", BookmarkController.bookmarkController.bookmarkTest);
        }
        return BookmarkController.bookmarkController;
    }

    private constructor() {}


    bookmarkATuit = (req: Request, res: Response) => BookmarkController.bookmarkDao.bookmarkATuit(req.params.tid,req.params.uid)
           .then(bookmark => res.json(bookmark)); 

           unBookmarkATuit = (req: Request, res: Response) => BookmarkController.bookmarkDao.unBookmarkATuit(req.params.tid,req.params.uid)
           .then(status => res.json(status));

           findTuitsBookmarkedByAUser = (req: Request, res: Response) => BookmarkController.bookmarkDao.findTuitsBookmarkedByAUser(req.params.uid)
           .then(bookmarks => res.json(bookmarks));

           findUsersThatBookmarkedATuid = (req: Request, res: Response)=> BookmarkController.bookmarkDao.findUsersThatBookmarkedATuid(req.params.tid)
           .then(bookmarks => res.json(bookmarks));

           bookmarkTest =(req: Request, res: Response) =>{
               res.send('bookmarks is working!!')
           }

}
