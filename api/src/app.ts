import "reflect-metadata";
import express from "express";
import "express-async-errors";
import "dotenv/config";
import cors from "cors";
import routes from "./routes";
import swaggerUi from "swagger-ui-express";
import swaggerDocs from "../swagger.json";
import ErrorMiddleware from "./middlewares/error.middleware";

const app = express();
app.use(express.json());
app.use(cors());
app.use(routes);
app.use("/files", express.static("uploads"));
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
app.use(ErrorMiddleware);

app.get("/", (req, res) => {
  res.send("Auto Car Api");
});

export default app;
