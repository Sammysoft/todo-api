import Board from "../Models/board-model.js";

export const Board_Controller = {
  _createBoard: async (req, res, next) => {
    try {
      const { board } = req.body;
      const newBoard = await new Board();
      newBoard.name = board;
      newBoard.save();
      res.status(200).json({ data: newBoard });
    } catch (error) {
      res
        .status(400)
        .json({ data: "Internal server error, please contact support" });
    }
  },
};
