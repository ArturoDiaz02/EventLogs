import IUserRepository from "../domain/interfaces/IUserRepository";
const UserRepository: IUserRepository = require('../domain/repository/user.rpt');

export const getById = async (id: string) => {
  try {
    return await UserRepository.getById(id);
  } catch (error: any) {
    throw new Error(error.message);
  }
}