import { Request, Response } from "express";
import createUserService from "../services/Users/userCreate.service";
import deleteUserService from "../services/Users/userDelete.service";
import listUserService from "../services/Users/userList.service";
import listUsersService from "../services/Users/usersList.service";
import updateUserService from "../services/Users/userUpdate.service";
import userLogin from "../services/Users/userLogin.service";

export default class UserController {
  static async store(req: Request, res: Response) {
    const { name, email, password, isAdmin } = req.validUser;
    const user = await createUserService({ name, password, isAdmin, email });

    return res.status(201).json(user);
  }

  static async login(req: Request, res: Response) {
    const {email, password} = req.body;
    const login = await userLogin({email, password})
    return res.status(200).json(login);
  }

  static async index(req: Request, res: Response) {
    const users = await listUsersService();
    return res.status(200).json(users);
  }

  static async list(req: Request, res: Response) {
    const { id } = req.params;

    const user = await listUserService({ id });

    return res.status(200).json(user);
  }

  static async update(req: Request, res: Response) {
    const { id } = req.params;
    const { name, password } = req.body;

    const user = await updateUserService({ id, name, password });

    return res.status(200).json(user);
  }

  static async delete(req: Request, res: Response) {
    const { id } = req.params;

    await deleteUserService({ id });

    return res.status(204).json();
  }
}
