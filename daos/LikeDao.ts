import Like from "../models/Like";
import LikeModel from "../mongoose/LikeModel";
import LikeDaoI from "../interfaces/LikeDao";

export default class LikeDao implements LikeDaoI { 

    private static likeDao: LikeDao | null = null;

    public static getInstance = (): LikeDao => {
        if(LikeDao.likeDao === null) {
            LikeDao.likeDao = new LikeDao();
        }
        return LikeDao.likeDao;
    }
    private constructor() {}


  async likeATuit(tid: string, uid: string): Promise<Like> {
    return await LikeModel.create({likedTuit:tid, likedBy: uid});
}

async dislikeATuit(tid: string, uid: string): Promise<any> {
    return await LikeModel.deleteOne({likedTuit:tid, likedBy: uid});
}

async findTuitsLikedByAUser(uid: string): Promise<any> { //modify to get array of tuit
    return await LikeModel.find({likedBy:uid});
}

async findUsersThatLikedATuid(tid: string): Promise<any> { //modify to get array of tuit
    return await LikeModel.find({likedTuit:tid});
}

}

