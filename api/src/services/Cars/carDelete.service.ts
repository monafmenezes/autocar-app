import { AppDataSource } from "../../data-source";
import { Car } from "../../entities/cars.entity";
import AppError from "../../errors/AppErrors";
import S3Storage from "../../utils/S3Storage";

const carDeleteService = async (id: string) => {
  const carRepository = AppDataSource.getRepository(Car);
  const car = await carRepository.findOne({ where: { id } });

  if (!car) throw new AppError("Id not found.", 404);

  const s3Storage = new S3Storage();
  await s3Storage.deleteFile(car.photo)

  await carRepository.delete(car.id);

  return true;
};

export default carDeleteService;