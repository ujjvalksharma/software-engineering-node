/**
 * @file Implements DAO managing data storage of likes. Uses mongoose TuitModel
 * to integrate with MongoDB
 */

import DislikeModel from "../mongoose/DislikeModel";
import DisLikeDaoI from "../interfaces/DisLikeDao";

/**
 * @class LikeDao Implements Data Access Object managing data storage
 * of likes
 * @property {LikeDao} UserDao Private single instance of LikeDao
 */
export default class DislikeDao implements DisLikeDaoI { 

    private static dislikeDao: DislikeDao | null = null;
   /**
     * Gets a single instance of MessageDao
     * @returns return like object
     */
    public static getInstance = (): DislikeDao => {
        if(DislikeDao.dislikeDao === null) {
            DislikeDao.dislikeDao = new DislikeDao();
        }
        return DislikeDao.dislikeDao;
    }
    private constructor() {}


async dislikeATuit(tid: string, uid: string): Promise<any> {
    return await DislikeModel.create({dislikedTuit:tid, dislikedBy: uid});
}

async findTuitsDislikedByAUser(uid: string): Promise<any> { //modify to get array of tuit
  //  return await LikeModel.find({likedBy:uid})
         return  await DislikeModel
            .find({dislikedBy: uid})
            .populate("dislikedTuit")
            .exec();
}

async findUsersThatdislikedATuid(tid: string): Promise<any> { //modify to get array of tuit
    return  await DislikeModel
            .find({dislikedTuit: tid})
            .populate("dislikedBy")
            .exec();
}

}

