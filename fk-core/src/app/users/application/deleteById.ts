import IUserRepository from "../domain/interfaces/IUserRepository";
const UserRepository: IUserRepository = require('../domain/repository/user.rpt');

export const deleteById = async (id: string) => {
  try {
    return await UserRepository.deleteById(id);
  } catch (error: any) {
    throw new Error(error.message);
  }
}