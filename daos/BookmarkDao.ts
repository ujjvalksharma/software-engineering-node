import Bookmark from "../models/Bookmark";
import BookmarkModel from "../mongoose/BookmarkModel";
import BookmarkDaoI from "../interfaces/BookmarkDao";

export default class BookmarkDao implements BookmarkDaoI { 

    private static bookmarkDaoDao: BookmarkDao | null = null;

    public static getInstance = (): BookmarkDao => {
        if(BookmarkDao.bookmarkDaoDao === null) {
            BookmarkDao.bookmarkDaoDao = new BookmarkDao();
        }
        return BookmarkDao.bookmarkDaoDao;
    }
    private constructor() {}


  async bookmarkATuit(tid: string, uid: string): Promise<Bookmark> {
    return await BookmarkModel.create({bookmarkedTuit:tid, bookmarkedBy: uid});
}

async unBookmarkATuit(tid: string, uid: string): Promise<any> {
    return await BookmarkModel.deleteOne({bookmarkedTuit:tid, bookmarkedBy: uid});
}

async findTuitsBookmarkedByAUser(uid: string): Promise<any> { //modify to get array of tuit
    return await BookmarkModel.find({likedBy:uid});
}

async findUsersThatBookmarkedATuid(tid: string): Promise<any> { //modify to get array of tuit
    return await BookmarkModel.find({likedTuit:tid});
}

}