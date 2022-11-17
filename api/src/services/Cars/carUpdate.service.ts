import fs from "fs";
import path from "path";
import { AppDataSource } from "../../data-source";
import { Car } from "../../entities/cars.entity";
import AppError from "../../errors/AppErrors";
import { ICarUpdate } from "../../interfaces/cars.interface";
import S3Storage from "../../utils/S3Storage";

const carUpdateService = async ({
  km,
  mark,
  model,
  filename,
  year,
  price,
  id,
}: ICarUpdate) => {
  const carRepository = AppDataSource.getRepository(Car);
  const car = await carRepository.findOne({ where: { id } });
  if (!car) throw new AppError("Id not found.", 404);

  if (filename) {
    const s3Storage = new S3Storage();
    await s3Storage.deleteFile(car.photo);
    await s3Storage.saveFile(filename.filename);
    car.photo = filename.filename;
  }

  model ? (car.model = model) : car.model;
  mark ? (car.mark = mark) : car.mark;
  km ? (car.km = parseInt(km)) : car.km;
  year ? (car.year = year) : car.year;
  price ? (car.price = parseInt(price)) : car.price;

  await carRepository.save(car);

  return car;
};

export default carUpdateService;
