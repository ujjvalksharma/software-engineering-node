import {Request, Response, Express} from "express";
import LikeDao from "../daos/LikeDao";
import LikeControllerI from "../interfaces/LikeController";

export default class LikeController implements LikeControllerI {

    private static likeDao: LikeDao = LikeDao.getInstance();
    private static likeController: LikeController | null = null;

    public static getInstance = (app: Express): LikeController => {

        if(LikeController.likeController === null) {
            LikeController.likeController = new LikeController();
            app.post("/users/:uid/likes/:tid", LikeController.likeController.likeATuit);
            app.delete("/users/:uid/likes/:tid", LikeController.likeController.dislikeATuit);   
            app.get("/users/:uid/likes", LikeController.likeController.findTuitsLikedByAUser); 
            app.get("/tuits/:tid/likes", LikeController.likeController.findUsersThatLikedATuid);
            app.get("/like/test", LikeController.likeController.likeTest);
        }
        return LikeController.likeController;
    }

    private constructor() {}


           likeATuit = (req: Request, res: Response) => LikeController.likeDao.likeATuit(req.params.tid,req.params.uid)
           .then(like => res.json(like)); 

           dislikeATuit = (req: Request, res: Response) => LikeController.likeDao.dislikeATuit(req.params.tid,req.params.uid)
           .then(status => res.json(status));

           findTuitsLikedByAUser = (req: Request, res: Response) => LikeController.likeDao.findTuitsLikedByAUser(req.params.uid)
           .then(likes => res.json(likes));

           findUsersThatLikedATuid = (req: Request, res: Response)=> LikeController.likeDao.findUsersThatLikedATuid(req.params.tid)
           .then(likes => res.json(likes));

           likeTest =(req: Request, res: Response) =>{
               res.send('like is working!!')
           }

}
