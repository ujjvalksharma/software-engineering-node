import User from "./User";
import Tag from "./Tag";
import Topic from "./Topic";

export default class Tuit {
   private tuit: string = '';
   private tag: Tag[] = [];
   private topic: Topic[] = [];
   private isBookMarked: boolean =false;
   private postedOn: Date = new Date();
   private postedBy: User | null = null;
   private tuitReply: Tuit[] = [];
   private repliesCount: number = 0;
   private likeCount: number =0;
}