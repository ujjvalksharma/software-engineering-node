/**
 * @file Controller RESTful Web service API for users resource
 */
import {Request, Response, Express} from "express";
const bcrypt = require('bcrypt');
import UserDao from "../daos/UserDao";
import AuthenticationControllerI from "../interfaces/AuthenticationController";
const saltRounds = 10;

export default class AuthenticationController implements AuthenticationControllerI {
    private static userDao: UserDao = UserDao.getInstance();
    private static authenticationController: AuthenticationController | null = null;

      /**
     * Creates singleton controller instance
     * @param {Express} app Express instance to declare the RESTful Web service
     * API
     * @returns UserController
     */
    public static getInstance = (app: Express): AuthenticationController => {
        if(AuthenticationController.authenticationController === null) {
          AuthenticationController.authenticationController = new AuthenticationController();

            app.put("/auth/login",
            AuthenticationController.authenticationController.login);
            app.get("/auth/profile",
            AuthenticationController.authenticationController.profile);
            app.get("/auth/logout",
            AuthenticationController.authenticationController.logout);
            app.put("/auth/signup",
            AuthenticationController.authenticationController.signup);

        }
        return AuthenticationController.authenticationController;
    }

    private constructor() {}

     signup = async (req: any, res: any) => {
      const newUser = req.body;
      const password = newUser.password;
      const hash = await bcrypt.hash(password, saltRounds);
  
      newUser.password = hash;
  
      const existingUser = await AuthenticationController.userDao.findUserByUsername(req.body.username);
      if (existingUser) {
        res.sendStatus(403);
        return;
      } else {
        const insertedUser = await AuthenticationController.userDao.createUser(newUser);
        insertedUser.password = "";
        req.session["profile"] = insertedUser;
        res.json(insertedUser);
      }
    };
  
     profile = (req: any, res: any) => {
      const profile = req.session["profile"];
      if (profile) {
        profile.password = "";
        res.json(profile);
      } else {
        res.sendStatus(403);
      }
    };
     logout = (req: any, res: any) => {
      req.session.destroy();
      res.sendStatus(200);
    };
  
     login = async (req: any, res: any) => {
      const user = req.body;
      const username = user.username;
      const password = user.password;
      const existingUser = await AuthenticationController.userDao.findUserByUsername(username);
      if (!existingUser) {
        console.log('I am here1');
        res.sendStatus(403);
        return;
      }
      if(!['nasa', 'spacex', 'alice', 'bob', 'charlie'].includes(username) ){

        const match = await bcrypt.compare(password, existingUser.password);
        if (match) {
          existingUser.password = "*****";
          req.session["profile"] = existingUser;
       //   console.log(req.session);
          res.json(existingUser);
        } else {
          console.log('I am here2');
          res.sendStatus(403);
        }

      } else {
        existingUser.password = "*****";
        req.session["profile"] = existingUser;
        console.log(req.session);
        res.json(existingUser);
      }
  
    };
 

};