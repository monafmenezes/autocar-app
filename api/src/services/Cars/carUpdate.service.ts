import { AppDataSource } from "../../data-source";
import { Car } from "../../entities/cars.entity";
import AppError from "../../errors/AppErrors";
import { ICarUpdate } from "../../interfaces/cars.interface";
import S3Storage from "../../utils/S3Storage";

const carUpdateService = async ({ filename, id }: ICarUpdate) => {
  const carRepository = AppDataSource.getRepository(Car);
  const car = await carRepository.findOne({ where: { id } });
  if (!car) throw new AppError("Id not found.", 404);

  if (filename) {
    const s3Storage = new S3Storage();
    await s3Storage.deleteFile(car.photo);
    await s3Storage.saveFile(filename.filename);
    car.photo = filename.filename;
  }

  await carRepository.save(car);

  return car;
};

export default carUpdateService;
