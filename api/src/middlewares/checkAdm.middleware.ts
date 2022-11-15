import { NextFunction, Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { User } from "../entities/users.entity";
import AppError from "../errors/AppErrors";

const checkAdmMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.user;
  const userRepository = AppDataSource.getRepository(User);
  const user = await userRepository.findOne({
    where: { id },
  });

  if (!user) throw new AppError("User not found.", 404);

  if (!user.isAdmin) throw new AppError("Access Denied", 401);

  return next();
};

export default checkAdmMiddleware;
