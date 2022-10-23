import Follow from "../models/Follow";
import FollowModel from "../mongoose/FollowModel";
import FollowDaoI from "../interfaces/FollowDao";

export default class FollowDao implements FollowDaoI { 

    private static followDao: FollowDao | null = null;

    public static getInstance = (): FollowDao => {
        if(FollowDao.followDao === null) {
            FollowDao.followDao = new FollowDao();
        }
        return FollowDao.followDao;
    }
    private constructor() {}


  async createFollow(follow: Follow): Promise<Follow> {
    return await FollowModel.create(follow);
}

async deleteFollow(userFollowed: string, userFollowing: string): Promise<any> {
    return await FollowModel.deleteOne({userFollowed:userFollowed, userFollowing: userFollowing});
}

async getFollowingOfAUser(uid: string): Promise<any> { //modify to get array of tuit
    return await FollowModel.find({userFollowed:uid});
}

async getFollowersOfAUser(uid: string): Promise<any> { //modify to get array of tuit
    return await FollowModel.find({userFollowing: uid});
}

}