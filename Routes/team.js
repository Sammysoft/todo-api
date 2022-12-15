import express from "express";
import { TeamController } from "../Controllers/team-controller.js";
const teamRoute = express.Router();

teamRoute.post("/team/create", TeamController._createTeam);
teamRoute.get("/team/update/status/:id", TeamController._updateTeamStatus);
teamRoute.post("/team/get", TeamController._getTeams);
teamRoute.post("/team/add/user/:id", TeamController._addUserToTeam);
export default teamRoute;
