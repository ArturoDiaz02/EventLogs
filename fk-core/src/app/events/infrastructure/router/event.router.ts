import { Router } from "express";
const EventController = require("../controller/event.ctrl");
import { validateCreate } from "../validators";

const eventRouter = Router();

eventRouter.get("/ping", (_req, res) => {
  res.send("pong");
});

// CRUD operations
eventRouter.post("/filters", EventController.getAllEventController);
eventRouter.get("/:id", EventController.getByIdController);

eventRouter.post("/", validateCreate, EventController.createEventController);
//
// eventRouter.put("/events/:id", controller);
//
// eventRouter.delete("/events/:id", controller);

export default eventRouter;

