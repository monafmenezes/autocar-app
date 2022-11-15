import { Request, Response } from "express";

export default class CarController {
    static async create(req: Request, res: Response ) {
      return res.json(req.file);
    }
}