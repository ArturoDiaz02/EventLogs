import IUserRepository from "../domain/interfaces/IUserRepository";
const UserRepository: IUserRepository = require('../domain/repository/user.rpt');

export const createUser = async (user: any) => {
  try {
    return await UserRepository.create(user);
  } catch (error: any) {
    throw new Error(error.message);
  }
}