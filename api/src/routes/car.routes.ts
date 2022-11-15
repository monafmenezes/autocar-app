import { Router } from "express";
import multer from "multer";
import CarController from "../controllers/Car.controller";
import { storage } from "../services/multerConfig";

const carRoutes = Router();
const upload = multer({storage: storage})

carRoutes.post("/", upload.single('file'), CarController.create)

export default carRoutes;