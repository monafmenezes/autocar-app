import { AppDataSource } from "../../data-source";
import { Car } from "../../entities/cars.entity";

export const carsListAll = async () => {
  const carRepository = AppDataSource.getRepository(Car);
  const cars = carRepository.find();
  return cars;
};

export default carsListAll;
