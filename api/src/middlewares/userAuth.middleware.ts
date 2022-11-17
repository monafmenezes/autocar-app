import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import AppError from "../errors/AppErrors";

const userAuthMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let jwtToken = req.headers.authorization;

  if (!jwtToken) throw new AppError("Missing authorization headers", 404);

  try {
    const [, token] = jwtToken?.split(" ");

    const secret = process.env.SECRET_KEY || "default";

    const decoded = jwt.verify(token, secret);

    const { sub } = decoded;

    req.user = {
      id: sub as string,
    };

    return next();
  } catch (err) {
    throw new AppError("Invalid Token", 401);
  }
};

export default userAuthMiddleware;
