import {Model} from "mongoose";
import IUserRepository from "../interfaces/IUserRepository";
const UserModel: Model<any> = require('../model/user');

class UserRepository implements IUserRepository{
  private static _instance: UserRepository;
  private constructor() { }
  public static get instance() {
    if (!UserRepository._instance) {
      UserRepository._instance = new UserRepository();
    }
    return UserRepository._instance;
  }

  async create(user: any) {
    return UserModel.create(user);
  }

  async getAll() {
    return UserModel.find();
  }

  async getById(id: string) {
    return UserModel.findById(id);
  }

  async deleteById(id: string) {
    return UserModel.findByIdAndDelete(id);
  }
}

module.exports = UserRepository.instance;