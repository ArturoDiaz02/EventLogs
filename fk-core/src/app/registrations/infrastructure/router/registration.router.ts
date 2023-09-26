import { Router } from "express";
const RegistrationController = require("../controller/registration.ctrl");


const registrationRouter = Router();

registrationRouter.get("/ping", (_req, res) => {
  res.send("pong");
});

// CRUD operations
registrationRouter.get("/event/:id", RegistrationController.getAllByEventController);

registrationRouter.post("/", RegistrationController.createRegistrationController);

export default registrationRouter;