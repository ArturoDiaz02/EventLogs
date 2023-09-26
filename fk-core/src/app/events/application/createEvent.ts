import IEventRepository from "../domain/interfaces/IEventRepository";
const EventRepository: IEventRepository = require("../domain/repository/event.rpt");

export const createEvent = async (event: any) => {
  try {
    return await EventRepository.create(event);
  } catch (error: any) {
    throw new Error(error.message);
  }
}