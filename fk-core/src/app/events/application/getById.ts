import IEventRepository from "../domain/interfaces/IEventRepository";
const EventRepository: IEventRepository = require("../domain/repository/event.rpt");

export const getById = async (id: string) => {
  try {
    return await EventRepository.getById(id);
  } catch (error: any) {
    throw new Error(error.message);
  }
}