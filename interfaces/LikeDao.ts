import Tuit from "../models/Tuit";
import Like from "../models/Like";
import User from "../models/Like";

export default interface LikeDao {
   likeATuit(tid: string, uid: string): Promise<Like>;
   dislikeATuit(tid: string, uid: string): Promise<any>;
   findTuitsLikedByAUser(uid: string): Promise<Tuit[]>;
   findUsersThatLikedATuid(tid: string): Promise<User[]>;
}
