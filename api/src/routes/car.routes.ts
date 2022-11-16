import { Router } from "express";
import multer from "multer";
import multerConfig from "../config/multerConfig";
import CarController from "../controllers/Car.controller";
import userAuthMiddleware from "../middlewares/userAuth.middleware";
import checkAdmMiddleware from "../middlewares/checkAdm.middleware";

const carRoutes = Router();


const upload = multer(multerConfig);

carRoutes.post("/", upload.single("file"), CarController.create);

export default carRoutes;
