import Tuit from "../models/Tuit";
import Bookmark from "../models/Bookmark";
import User from "../models/Like";

export default interface BookmarkDao {
   bookmarkATuit(tid: string, uid: string): Promise<Bookmark>;
   unBookmarkATuit(tid: string, uid: string): Promise<any>;
   findTuitsBookmarkedByAUser(uid: string): Promise<Tuit[]>;
   findUsersThatBookmarkedATuid(tid: string): Promise<User[]>;
}
