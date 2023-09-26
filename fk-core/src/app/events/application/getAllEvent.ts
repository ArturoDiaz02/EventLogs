import IEventRepository from "../domain/interfaces/IEventRepository";
const EventRepository: IEventRepository = require("../domain/repository/event.rpt");

export const getAllEvent = async (filters: any) => {
  try {
    return await EventRepository.getAll(filters);
  } catch (error: any) {
    throw new Error(error.message);
  }
}
