import Team from "../Models/team-model.js";

export const Update = async (req, res, next) => {
  const team = await Team.find();
  try {
    const date = new Date(team.endDate);
    const endDateInMilliseconds = date.getMilliseconds();
    const todayDateInMilliseconds = new Date().getMilliseconds();
    if (endDateInMilliseconds >= todayDateInMilliseconds) {
      team.status = "Expired";
      team.save();
      console.log("some tasks are expired");
      next();
    } else {
      console.log("Watcher is working...");
      next();
      return null;

    }
  } catch (error) {
    next();
    return null;
  }
};
