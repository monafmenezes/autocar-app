import { Request, Response } from "express";
import carsCreateService from "../services/Cars/carCreate.service";
import carDeleteService from "../services/Cars/carDelete.service";
import carListService from "../services/Cars/carList.service";
import carsListAll from "../services/Cars/carListAll.service";
import carUpdateService from "../services/Cars/carUpdate.service";
export default class CarController {
  static async create(req: Request, res: Response) {
    const { km, mark, model, year, price } = req.body;

    const filename = req.file;
    if (filename) {
      const car = await carsCreateService({
        km,
        mark,
        model,
        year,
        filename,
        price,
      });
      return res.status(201).json(car);
    }
  }

  static async index(req: Request, res: Response) {
    const cars = await carsListAll();

    return res.json(cars);
  }

  static async list(req: Request, res: Response) {
    const { id } = req.params;

    const car = await carListService(id);

    return res.json(car);
  }

  static async update(req: Request, res: Response) {
    const { id } = req.params;
    const filename = req.file;

    if (filename) {
      const car = await carUpdateService({
        filename,
        id,
      });
      return res.status(200).json(car);
    }
  }

  static async delete(req: Request, res: Response) {
    const { id } = req.params;

    await carDeleteService(id);
    return res.status(204).json();
  }
}
