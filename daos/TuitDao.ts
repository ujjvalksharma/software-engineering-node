import TuitModel from "../mongoose/TuitModel";
import TuitDaoI from "../interfaces/TuitDao";
import Tuit from "../models/Tuit";

export default class TuitDao implements TuitDaoI {
   async findAllTuits(): Promise<Tuit[]> {
       return await TuitModel.find();
   }
   async findTuitById(tuidId: string): Promise<any> {
       return await TuitModel.findById(tuidId);
   }
   async createTuit(tuit: Tuit): Promise<Tuit> {
        TuitModel.create(tuit);
        return tuit;
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
