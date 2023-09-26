import IUserRepository from "../domain/interfaces/IUserRepository";
const UserRepository: IUserRepository = require('../domain/repository/user.rpt');

export const getAllUsers = async () => {
  try {
    return await UserRepository.getAll();
  } catch (error: any) {
    throw new Error(error.message);
  }
}