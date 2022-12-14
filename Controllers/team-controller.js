import Team from "../Models/team-model.js";

export const TeamController = {
  _createTeam: async (req, res, next) => {
    const { board, task, users, startDate, endDate } = req.body;
    try {
      const team = await new Team();
      team.board_name = board;
      team.users.push(users);
      team.task = task;
      team.startDate = startDate;
      team.endDate = endDate;
      team.save();
      res.status(200).json({ data: team });
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
};
