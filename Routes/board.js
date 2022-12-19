import express from "express";
import { Board_Controller } from "../Controllers/board-controller.js";
const boardRoute = express.Router();


boardRoute.post("/board/create", Board_Controller._createBoard);

export default boardRoute;