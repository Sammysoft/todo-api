import express from "express";
const userRoute = express.Router();
import { UserController } from "../Controllers/user-controller.js";
import { validateUserDetails } from "../middlewares/validateUserDetails.js";

userRoute.post("/user/create", UserController._createUser);
export default userRoute;
