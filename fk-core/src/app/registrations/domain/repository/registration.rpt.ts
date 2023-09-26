import {Model} from "mongoose";
import IRegistrationRepository from "../interfaces/IRegistrationRepository";
const RegistrationModel: Model<any> = require('../model/registration');

class RegistrationRepository implements IRegistrationRepository{
  private static _instance: RegistrationRepository;
  private constructor() { }

  public static get instance() {
    if (!RegistrationRepository._instance) {
      RegistrationRepository._instance = new RegistrationRepository();
    }
    return RegistrationRepository._instance;
  }

  create(data: any): Promise<any> {
    return RegistrationModel.create(data);
  }

  deleteById(id: string): Promise<any> {
    return RegistrationModel.findByIdAndDelete(id);
  }

  getAllByEvent(eventID: string): Promise<any> {
    return RegistrationModel.find({
      event: eventID
    })
  }

  getById(id: string): Promise<any> {
    return RegistrationModel.findById(id)
  }

}

module.exports = RegistrationRepository.instance