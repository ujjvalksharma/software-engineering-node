import {Request, Response} from "express";

/**
 * @file This file acts an interface for user api.
 */
export default interface UserControllerI {
   /**
    * Signs up the user
    * @param req request object
    * @param res response object
    */
   signup(req: Request, res: Response): void;
    /**
    * Logs in the user
    * @param req request object
    * @param res response object
    */
   login(req: Request, res: Response): void;
    /**
    * Gets profile of the user
    * @param req request object
    * @param res response object
    */
   profile(req: Request, res: Response): void;
    /**
    * Logs out the user
    * @param req request object
    * @param res response object
    */
   logout(req: Request, res: Response): void;
}
