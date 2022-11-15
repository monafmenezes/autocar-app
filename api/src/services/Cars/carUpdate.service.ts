import { unlinkSync } from "fs";
import { AppDataSource } from "../../data-source";
import { Car } from "../../entities/cars.entity";
import AppError from "../../errors/AppErrors";
import { ICarUpdate } from "../../interfaces/cars.interface";

const carUpdateService = async ({
  km,
  mark,
  model,
  filename,
  year,
  id,
}: ICarUpdate) => {
  const carRepository = AppDataSource.getRepository(Car);
  const car = await carRepository.findOne({ where: { id } });

  if (!car) throw new AppError("Id not found.", 404);

  if (filename) {
    unlinkSync(`./uploads/${car.photo}`);
    car.photo = filename;
  }

  model ? (car.model = model) : car.model;
  mark ? (car.mark = mark) : car.mark;
  km ? (car.km = parseInt(km)) : car.km;
};

export default carUpdateService;
