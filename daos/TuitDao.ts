import TuitModel from "../mongoose/TuitModel";
import TuitDaoI from "../interfaces/TuitDao";
import Tuit from "../models/Tuit";

export default class TuitDao implements TuitDaoI {


    private static tuitDao: TuitDao | null = null;
    public static getInstance = (): TuitDao => {
        if(TuitDao.tuitDao === null) {
            TuitDao.tuitDao = new TuitDao();
        }
        return TuitDao.tuitDao;
    }
    private constructor() {}
    
   async findAllTuits(): Promise<Tuit[]> {
       return await TuitModel.find();
   }
   async findTuitById(tuidId: string): Promise<any> {
       return await TuitModel.findById(tuidId);
   }
    
   async createTuit(uid: string, tuit: Tuit): Promise<any> {
    return await TuitModel.create({...tuit, postedBy: uid});
}

   async deleteTuit(uid: string):  Promise<any> {
       return await TuitModel.deleteOne({_id: uid});
   }
   async updateTuit(tid: string, tuit: Tuit): Promise<any> {
       TuitModel.updateOne({ _id: tid }, { tuit });
       return tuit;
   }

   async findTuitsByUser(uid: string): Promise<any> {
    return await TuitModel.findOne({posted_by:uid}); //to be changed
}
}

/*
    findAllTuitsByUser = async (uid: string): Promise<Tuit[]> =>
        TuitModel.find({postedBy: uid})
            .populate("postedBy")
            .exec();
    findTuitById = async (uid: string): Promise<any> =>
        TuitModel.findById(uid)
            .populate("postedBy")
            .exec();
    createTuitByUser = async (uid: string, tuit: Tuit): Promise<Tuit> =>
        TuitModel.create({...tuit, postedBy: uid});
    updateTuit = async (uid: string, tuit: Tuit): Promise<any> =>
        TuitModel.updateOne(
            {_id: uid},
            {$set: tuit});
    deleteTuit = async (uid: string): Promise<any> =>
        TuitModel.deleteOne({_id: uid});

*/