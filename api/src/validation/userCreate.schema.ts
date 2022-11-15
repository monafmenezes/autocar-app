import * as yup from "yup";
import { SchemaOf } from "yup";
import { IUserCreate } from "../interfaces/user.interfaces";
import { NextFunction, Request, Response } from "express";

export const createUserSchema: SchemaOf<IUserCreate> = yup.object().shape({
  name: yup.string().required("Name is required"),
  password: yup.string().required("Password is required"),
  email: yup.string().email().required("Email is required"),
  isAdmin: yup.boolean().required("Admin is required"),
});

export const validateUserCreation =
  (schema: SchemaOf<IUserCreate>) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = req.body;

      try {
        const validatedData = await schema.validate(data, {
          abortEarly: false,
          stripUnknown: true,
        });

        req.validUser = validatedData;
        next();
      } catch (err: any) {
        return res.status(400).json({
          status: "error",
          message: err.errors?.join(","),
        });
      }
    } catch (err) {
      next(err);
    }
  };
