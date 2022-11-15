import { hash } from "bcryptjs";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities/users.entity";
import AppError from "../../errors/AppErrors";
import { IUserCreate } from "../../interfaces/user.interfaces";

const createUserService = async ({
  email,
  name,
  password,
  isAdmin,
}: IUserCreate) => {
  const userRepository = AppDataSource.getRepository(User);
  const usernameFind = await userRepository.findOne({ where: { email } });

  if (usernameFind) throw new AppError("Email already exists", 409);

  const hashedPassword = await hash(password, 8);

  const user = new User();

  user.name = name;
  user.password = hashedPassword;
  user.email = email;
  user.isAdmin = isAdmin;
  user.created = new Date();

  userRepository.create(user);

  await userRepository.save(user);

  const res = {
    name: user.name,
    email: user.email,
    admin: user.isAdmin,
    created: user.created,
  };

  return res;
};

export default createUserService;
