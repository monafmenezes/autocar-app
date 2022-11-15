import { Router } from "express";
import carRoutes from "./car.routes";
import userRoutes from "./users.routes";

const routes = Router();

routes.use("/car", carRoutes);
routes.use("/user", userRoutes);

export default routes;
