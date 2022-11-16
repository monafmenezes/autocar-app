import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities/users.entity";
import AppError from "../../errors/AppErrors";
import { IUserSession } from "../../interfaces/user.interfaces";

const userLogin = async ({ email, password }: IUserSession) => {
  const userRepository = AppDataSource.getRepository(User);

  const user = await userRepository.findOne({ where: { email } });

  if (!user) throw new AppError("Username or password is invalid");

  const comparePassword = await compare(password, user.password);

  if (!comparePassword) throw new AppError("Username or password is invalid");

  const token = sign({}, process.env.SECRET_KEY || "default", {
    subject: user.id,
    expiresIn: "1d",
  });

  return {
    token,
  };
};

export default userLogin;
