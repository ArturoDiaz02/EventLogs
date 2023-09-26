import IRegistrationRepository from "../domain/interfaces/IRegistrationRepository";
const RegistrationRepository: IRegistrationRepository = require('../domain/repository/registration.rpt');

export const createRegistration = async (registration: any) => {
  try {
    return await RegistrationRepository.create(registration);
  } catch (error: any) {
    throw new Error(error.message);
  }
}