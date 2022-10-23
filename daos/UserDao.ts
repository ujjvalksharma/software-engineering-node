import User from "../models/User";
import UserModel from "../mongoose/UserModel";
import UserDaoI from "../interfaces/UserDao";

export default class UserDao implements UserDaoI { 
    private static userDao: UserDao | null = null;
    public static getInstance = (): UserDao => {
        if(UserDao.userDao === null) {
            UserDao.userDao = new UserDao();
        }
        return UserDao.userDao;
    }
    private constructor() {}

   async findAllUsers(): Promise<User[]> {
       return await UserModel.find();
   }
   async findUserById(uid: string): Promise<any> {
       return await UserModel.findById(uid);
   }
   async createUser(user: User): Promise<any> {
       UserModel.create(user);
        return await UserModel.findOne({username:user.username});
   }
   async deleteUser(uid: string):  Promise<any> {
       return await UserModel.deleteOne({_id: uid});
   }
   async updateUser(uid: string, user: User): Promise<User> {
      UserModel.updateOne({ _id: uid }, { user });
      return user;
   }
}

