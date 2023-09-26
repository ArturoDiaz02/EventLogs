import { Router } from "express";
const UserController = require("../controller/user.ctrl");
import { validateCreate } from "../validators";

const userRouter = Router();

userRouter.get("/ping", (_req, res) => {
  res.send("pong");
});

// CRUD operations
userRouter.get("/", UserController.getAllUserController);
userRouter.get("/:id", UserController.getByIdController);

userRouter.post("/", validateCreate, UserController.createUserController);

userRouter.delete("/:id", UserController.deleteByIdController);

export default userRouter;