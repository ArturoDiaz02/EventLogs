import { Request, Response } from 'express';
import { createRegistration, getAllByEvent} from "../../application";

class RegistrationController{

  private static _instance: RegistrationController;
  private constructor() { }
  public static get instance() {
    if (!RegistrationController._instance) {
      RegistrationController._instance = new RegistrationController();
    }
    return RegistrationController._instance;
  }

  async createRegistrationController(req: Request, res: Response) {
    try {
      const registration = await createRegistration(req.body);
      res.status(201).json(registration);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  }

  async getAllByEventController(req: Request, res: Response) {
    try {
      const registrations = await getAllByEvent(req.params.id);
      res.status(200).json(registrations);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  }

}

module.exports = RegistrationController.instance;