import Follow from "../models/Follow";

export default interface FollowDao { 
   createFollow(follow: Follow): Promise<Follow>;
   deleteFollow(userFollowed: string, userFollowing: string): Promise<any>;
   getFollowingOfAUser(uid: string): Promise<Follow[]>;
   getFollowersOfAUser(uid: string): Promise<Follow[]>;
}