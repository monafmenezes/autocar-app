import { AppDataSource } from "../../data-source";
import { User } from "../../entities/users.entity";
import AppError from "../../errors/AppErrors";
import { IUserId } from "../../interfaces/user.interfaces";

const deleteUserService = async ({ id }: IUserId) => {
  const userRepository = AppDataSource.getRepository(User);
  const user = await userRepository.findOne({ where: { id } });

  if (!user) throw new AppError("User not found", 404);
   await userRepository.delete(id);

   return true;
};

export default deleteUserService;
