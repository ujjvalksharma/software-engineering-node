import User from "./User";
import Tuit from "./Tuit";

export default class Bookmark {
    private bookmarkedTuit: Tuit | null = null;
   private bookmarkedBy: User | null = null;
   private postedOn: Date = new Date(); 
}