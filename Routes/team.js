import express from "express";
import { TeamController } from "../Controllers/team-controller.js";
const teamRoute = express.Router();

teamRoute.post("/team/create", TeamController._createTeam);
teamRoute.get("/team/update/status/:id", TeamController._updateTeamStatus);
export default teamRoute;
