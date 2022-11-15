import { AppDataSource } from "../../data-source";
import { Car } from "../../entities/cars.entity";
import { ICarCreate } from "../../interfaces/cars.interface";

const carsCreateService = async ({
  km,
  mark,
  model,
  year,
  filename,
}: ICarCreate) => {
  const carRepository = AppDataSource.getRepository(Car);

  const car = new Car();
  car.model = model;
  car.mark = mark;
  car.year = year;
  car.km = parseInt(km);

  if (filename) car.photo = filename;

  carRepository.create(car);
  await carRepository.save(car);

  return car;
};

export default carsCreateService;
