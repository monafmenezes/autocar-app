import { Request, Response } from "express";
import carsCreateService from "../services/Cars/carCreate.service";
export default class CarController {
  static async create(req: Request, res: Response) {
    const { km, mark, model, year } = req.body;
    const file = req.file;

    if (file) {
      const filename = file.filename;
      const car = await carsCreateService({ km, mark, model, year, filename });
      return res.status(201).json(car);
    }
  }
}
