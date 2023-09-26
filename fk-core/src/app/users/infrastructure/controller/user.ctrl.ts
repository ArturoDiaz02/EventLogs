import { Request, Response } from 'express';
import { getAllUsers, createUser, getById, deleteById } from "../../application";

class UserController{
  private static _instance: UserController;
  private constructor() { }
  public static get instance() {
    if (!UserController._instance) {
      UserController._instance = new UserController();
    }
    return UserController._instance;
  }

  async getAllUserController(_req: Request, res: Response) {
    try {
      const users = await getAllUsers();
      res.status(200).json(users);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  }

  async createUserController(req: Request, res: Response) {
    try {
      const user = await createUser(req.body);
      res.status(201).json(user);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  }

  async getByIdController(req: Request, res: Response) {
    try {
      const user = await getById(req.params.id);
      res.status(200).json(user);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  }

  async deleteByIdController(req: Request, res: Response) {
    try {
      const user = await deleteById(req.params.id);
      res.status(200).json(user);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  }

}

module.exports = UserController.instance;