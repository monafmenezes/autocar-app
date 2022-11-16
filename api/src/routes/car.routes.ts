import { Router } from "express";
import multer from "multer";
import multerConfig from "../config/multerConfig";
import CarController from "../controllers/Car.controller";
import userAuthMiddleware from "../middlewares/userAuth.middleware";
import checkAdmMiddleware from "../middlewares/checkAdm.middleware";

const carRoutes = Router();

const upload = multer(multerConfig);

carRoutes.post("/", upload.single("file"), CarController.create);
carRoutes.get("/:id", CarController.list);
carRoutes.get("/", CarController.index);
carRoutes.patch(
  "/:id",
  upload.single("file"),
  userAuthMiddleware,
  checkAdmMiddleware,
  CarController.update
);
carRoutes.delete(
  "/:id",
  upload.single("file"),
  userAuthMiddleware,
  checkAdmMiddleware,
  CarController.delete
);

export default carRoutes;
