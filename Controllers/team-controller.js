import Team from "../Models/team-model.js";

export const TeamController = {
  _createTeam: async (req, res, next) => {
    const { board, task, startDate, endDate } = req.body;
    try {
      const existingTeam = await Team.findOne({ board_name: board });
      if (existingTeam) {
        res.status(400).json({ data: "Team already exists" });
      } else {
        if (!board || !task || !startDate || !endDate) {
          res.status(400).json({
            data: "Please provide all required details before creating a Team",
          });
        } else {
          const team = await new Team(req.body);
          team.save();
          res.status(200).json({ data: team });
        }
      }
    } catch (error) {
      res
        .status(400)
        .json({ data: "Internal Server Error, please contact support." });
    }
  },

  _updateTeamStatus: async (req, res, next) => {
    try {
      const team = Team.findById({ _id: req.params.id });
      team.status = "Done";
      team.save();
    } catch (error) {
      res
        .status(400)
        .json({ data: "Internal Server Error, please contact support" });
    }
  },

  _getTeams: async (req, res, next) => {
    try {
      const { board } = req.body;
      const teams = await Team.find({ board: board });
      res.status(200).json({ data: teams });
    } catch (error) {
      res
        .status(400)
        .json({ data: "Internal Server Error, please contact support" });
    }
  },

  _addUserToTeam: async (req, res, next) => {
    try {
      const { board, users, task } = req.body;
      const team = await Team.findOne({ board_name: board, task: task });
      if (team !== null) {
        let found = users.map((user) => {
          return team.users.includes(user) ? null : user;
        });
        console.log(found);
        if (!found.includes(null)) {
          team.users = [...team.users, ...users];
          team.save();
          let respond = users.map((e) => {
            return `${e}`;
          });
          res
            .status(200)
            .json({ data: `Users ${respond} have been added to the Team` });
        } else {
          let found = users.map((user) => {
            return team.users.includes(user) ? null : user;
          });
          found = found.filter((v) => v !== null);
          console.log(found);
          if (found.length <= 0) {
            res
              .status(400)
              .json({ data: "User(s) already exists in this Team" });
          } else {
            team.users = [...team.users, ...found];
            team.save();
            let respond = found.map((e) => {
              return `${e}`;
            });
            res.status(400).json({
              data: `User ${respond} has been added to the Team`,
            });
          }
        }
      } else {
        res.status(400).json({ data: "Team not found" });
      }
    } catch (error) {
      res.status(400).json({
        data: "Internal Server Error, please contact support!" + error,
      });
    }
  },
};
