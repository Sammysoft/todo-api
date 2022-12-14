import User from "../Models/user-model.js";

export const UserController = {
  _createUser: async (req, res, next) => {
    const { firstname, lastname, email } = req.body;
    if (!firstname || !lastname || !email) {
      res.status(400).json({ data: "Missing details" });
    } else {
      try {
        const user = await User.findOne({
          firstname: firstname,
          lastname: lastname,
          email: email,
        });
        if (user) {
          res.status(400).json({ data: "User already exists" });
        } else {
          const newUser = await new User();
          newUser.firstname = firstname;
          newUser.lastname = lastname;
          newUser.email = email;
          newUser.save();
          res.status(200).json({ data: newUser });
        }
      } catch (error) {
        res.status(400).json({
          data: "Internal Server Error, please contact support! " + error,
        });
      }
    }
  },
};
