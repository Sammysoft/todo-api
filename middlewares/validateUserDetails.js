import { request, response } from "express";

export const validateUserDetails = (route) => {
  switch (route) {
    case "/user/create":
      if (request.body.firstname === "" || request.body.firstname === null) {
        response.status(400).json({ data: "Firstname field is required" });
      } else if (
        request.body.lastname === "" ||
        request.body.lastname === null
      ) {
        res.status(400).json({ data: "Firstname field is required" });
      } else if (
        request.body.firstname === "" ||
        request.body.firstname === null ||
        request.body.lastname === "" ||
        request.body.lastname === null
      ) {
        res
          .status(400)
          .json({ data: "Firstname and Lastname field is required" });
      } else {
        next();
      }
      break;

    default:
      break;
  }
};
