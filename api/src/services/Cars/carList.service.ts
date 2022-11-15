import { AppDataSource } from "../../data-source";
import { Car } from "../../entities/cars.entity";
import AppError from "../../errors/AppErrors";

const carListService = async (id: string) => {
  const carRepository = AppDataSource.getRepository(Car);

  const car = await carRepository.findOne({ where: { id } });

  if (!car) throw new AppError("Id not found.", 404);

  return car;
};

export default carListService;
