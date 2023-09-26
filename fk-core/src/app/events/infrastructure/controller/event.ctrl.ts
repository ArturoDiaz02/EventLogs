import { Request, Response } from 'express';
import { getAllEvent, createEvent, getById } from "../../application";

class EventController{

  private static _instance: EventController;
  private constructor() { }
  public static get instance() {
    if (!EventController._instance) {
      EventController._instance = new EventController();
    }
    return EventController._instance;
  }

  async getAllEventController(req: Request, res: Response) {
    try {
      const filters = req.body;
      const events = await getAllEvent(filters);
      res.status(200).json(events);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  }

  async createEventController(req: Request, res: Response) {
    try {
      const event = await createEvent(req.body);
      res.status(201).json(event);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  }

  async getByIdController(req: Request, res: Response) {
    try {
      const event = await getById(req.params.id);
      res.status(200).json(event);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  }

}

module.exports = EventController.instance;