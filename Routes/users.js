import express from "express";
const userRoute = express.Router();
import { UserController } from "../Controllers/user-controller.js";

userRoute.post("/user/create", UserController._createUser);
userRoute.get("/user/get", UserController._getUsers);
export default userRoute;
