import "reflect-metadata";
import express from "express";
import "express-async-errors";
import "dotenv/config";
import cors from "cors";
import routes from "./routes";

const app = express();
app.use(express.json());
app.use(cors());
app.use(routes);
app.use("/files", express.static("uploads"));

app.get("/", (req, res) => {
  res.send("Auto Car Api");
});

export default app;
