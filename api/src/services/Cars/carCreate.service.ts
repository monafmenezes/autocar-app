import { AppDataSource } from "../../data-source";
import { Car } from "../../entities/cars.entity";
import { ICarCreate } from "../../interfaces/cars.interface";
import S3Storage from "../../utils/S3Storage";

const carsCreateService = async ({
  km,
  mark,
  model,
  year,
  price,
  filename,
}: ICarCreate) => {
  const carRepository = AppDataSource.getRepository(Car);
  const s3Storage = new S3Storage();
  await s3Storage.saveFile(filename.filename)

  const car = new Car();
  car.model = model;
  car.mark = mark;
  car.year = year;
  car.km = parseInt(km);
  car.price = parseInt(price);
  car.photo = filename.filename;

  carRepository.create(car);
  await carRepository.save(car);

  return car;
};

export default carsCreateService;
