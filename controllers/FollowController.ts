import {Request, Response, Express} from "express";
import FollowDao from "../daos/FollowDao";
import FollowControllerI from "../interfaces/FollowController";

export default class FollowController implements FollowControllerI {

    private static followDao: FollowDao = FollowDao.getInstance();
    private static followController: FollowController | null = null;

    public static getInstance = (app: Express): FollowController => {

        if(FollowController.followController === null) {
            FollowController.followController = new FollowController();
            app.post("/follow", FollowController.followController.createFollow);
            app.delete("/follow/userFollowed/:userFollowed/userFollowing/:userFollowing", FollowController.followController.deleteFollow);   
            app.get("/follow/followers/:uid", FollowController.followController.getFollowingOfAUser); 
            app.get("/follow/following/:uid", FollowController.followController.getFollowersOfAUser);
            app.get("/follow/test", FollowController.followController.followTest);
        }
        return FollowController.followController;
    }

    private constructor() {}


          createFollow = (req: Request, res: Response) => FollowController.followDao.createFollow(req.body)
           .then(follwer => res.json(follwer)); 

           deleteFollow = (req: Request, res: Response) => FollowController.followDao.deleteFollow(req.params.userFollowed,req.params.userFollowing )
           .then(status => res.json(status));

           getFollowingOfAUser = (req: Request, res: Response) => FollowController.followDao.getFollowingOfAUser(req.params.uid)
           .then(follwers => res.json(follwers));

           getFollowersOfAUser = (req: Request, res: Response)=> FollowController.followDao.getFollowersOfAUser(req.params.uid)
           .then(follwers => res.json(follwers));

           followTest =(req: Request, res: Response) =>{
               res.send('follow is working!!')
           }

}
