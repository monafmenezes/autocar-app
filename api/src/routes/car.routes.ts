import { Router } from "express";
import multer from "multer";
import { storage } from "../utils/multerConfig";
import CarController from "../controllers/Car.controller";
import userAuthMiddleware from "../middlewares/userAuth.middleware";
import checkAdmMiddleware from "../middlewares/checkAdm.middleware";

const carRoutes = Router();

const upload = multer({ storage: storage });
upload.single("photo");

carRoutes.post("/", upload.single("photo"), CarController.create);

export default carRoutes;
