import { Router } from "express";
import UserController from "../controllers/Users.controller";
import checkAdmMiddleware from "../middlewares/checkAdm.middleware";
import userAuthMiddleware from "../middlewares/userAuth.middleware";
import {
  createUserSchema,
  validateUserCreation,
} from "../validation/userCreate.schema";

const userRoutes = Router();

userRoutes.post(
  "/",
  validateUserCreation(createUserSchema),
  UserController.store
);
userRoutes.get(
  "/",
  userAuthMiddleware,
  checkAdmMiddleware,
  UserController.index
);
userRoutes.get("/:id", userAuthMiddleware, UserController.list);
userRoutes.patch("/:id", userAuthMiddleware, UserController.update);
userRoutes.delete("/:id", userAuthMiddleware, UserController.delete);

export default userRoutes;