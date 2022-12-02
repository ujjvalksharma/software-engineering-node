/**
 * @file Controller RESTful Web service API for likes resource
 */
import {Request, Response, Express} from "express";
import DislikeDao from "../daos/DislikeDao";
import DislikeControllerI from "../interfaces/DislikeController";

/**
 * @class DislikeController Implements RESTful Web service API for users resource.
 * Defines the following HTTP endpoints:
 * <ul>
 *     <li>POST /users/:uid/dislikes/:tid to create tuit</li>
 *     <li>DELETE /users/:uid/dislikes/:tid to delete tuit</li>
 *     <li>GET /users/:uid/dislikes get tuits who like a specific user</li>
 *     <li>GET /tuits/:tid/dislikes get users who like a specific tuit</li>
 * </ul>
 * @property {LikeDao} FollowDao Singleton DAO implementing user CRUD operations
 * @property {LikeController} userController Singleton controller implementing
 * RESTful Web service API
 */
export default class DislikeController implements DislikeControllerI {

    private static dislikeDao: DislikeDao = DislikeDao.getInstance();
    private static dislikeController: DislikeController | null = null;

     /**
     * Creates singleton controller instance
     * @param {Express} app Express instance to declare the RESTful Web service
     * API
     * @returns LikeController
     */
    public static getInstance = (app: Express): DislikeController => {

        if(DislikeController.dislikeController === null) {
            DislikeController.dislikeController = new DislikeController();
            app.post("/users/:uid/dislikes/:tid", DislikeController.dislikeController.dislikeATuit);   
            app.get("/users/:uid/dislikes", DislikeController.dislikeController.findTuitsDislikedByAUser); 
            app.get("/tuits/:tid/dislikes", DislikeController.dislikeController.findUsersThatDislikedATuid);
        }
        return DislikeController.dislikeController;
    }

    private constructor() {}

           dislikeATuit = (req: Request, res: Response) => DislikeController.dislikeDao.dislikeATuit(req.params.tid,req.params.uid)
           .then(status => res.json(status));

           findTuitsDislikedByAUser = (req: Request, res: Response) => DislikeController.dislikeDao.findTuitsDislikedByAUser(req.params.uid)
           .then(dislikes => res.json(dislikes));

           findUsersThatDislikedATuid = (req: Request, res: Response)=> DislikeController.dislikeDao.findUsersThatdislikedATuid(req.params.tid)
           .then(dislikes => res.json(dislikes));

}
