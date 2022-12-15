import mongoose from "mongoose";

const teamSchema = new mongoose.Schema(
  {
    board: { type: String },
    task: { type: String },
    users: [String],
    startDate: { type: String },
    endDate: { type: String },
    status: { type: String, default: "Pending" },
  },
  { timestamps: true }
);

const Team = mongoose.model("Team", teamSchema);
export default Team;
