import Tuit from "../models/Tuit";
import User from "../models/User";

/**
 * @file This file is an interface for using likes collections
 */
export default interface DislikeDao { 
   /**
    * Tuit that is disliked
    * @param tid tuit id which is disliked
    * @param uid user id which is dislikes the tuit
    */
   dislikeATuit(tid: string, uid: string): Promise<any>;
   /**
    * Find tuits that disliked a tuit
    * @param uid user who likes the tuit
    */
   findTuitsDislikedByAUser(uid: string): Promise<any>;
   /**
    * Find users that disliked a tuit
    * @param tid tuit that is liked
    */
   findUsersThatdislikedATuid(tid: string): Promise<any>;
}
