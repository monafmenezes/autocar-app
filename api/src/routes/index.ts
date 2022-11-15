import { Router } from "express";
import carRoutes from "./car.routes"

const routes = Router()

routes.use("/car", carRoutes);


export default routes;