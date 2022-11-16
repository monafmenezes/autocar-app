import * as express from "express";
import { IUserCreate } from "../../src/interfaces/user.interfaces";

declare global {
  namespace Express {
    interface Request {
      user: {
        id: string;
      };
      validUser: IUserCreate;
    }
  }
}
