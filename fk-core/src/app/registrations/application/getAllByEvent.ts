import IRegistrationRepository from "../domain/interfaces/IRegistrationRepository";
const RegistrationRepository: IRegistrationRepository = require('../domain/repository/registration.rpt');

export const getAllByEvent = async (eventID: string) => {
  try {
    return await RegistrationRepository.getAllByEvent(eventID);
  } catch (error: any) {
    throw new Error(error.message);
  }
}