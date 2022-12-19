import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import { db } from "./config/db.js";
import cors from "cors";
import userRoute from "./Routes/users.js";
import teamRoute from "./Routes/team.js";
import boardRoute from "./Routes/board.js";
import { Update } from "./middlewares/autoUpdateTaskStatus.js";

const server = express();
dotenv.config();

const PORT = process.env.PORT || 6069;

server.use(function (req, res, next) {
  //Enabling CORS
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type"
  );
  next();
});

//Configuring body-parser
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));
server.use(cors());

server.listen(PORT, () => {
  db._init();
  console.log(`Server running on port ${PORT}`);
});

server.use("/api", userRoute, (req, res, next) => {
  Update(req, res, next);
});
server.use("/api", teamRoute, (req, res, next) => {
  Update(req, res, next);
});
server.use("/api", boardRoute);
