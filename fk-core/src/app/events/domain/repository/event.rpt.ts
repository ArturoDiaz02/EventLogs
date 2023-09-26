
import IEventRepository from "../interfaces/IEventRepository";
import EventModel from '../model/event';

class EventRepository implements IEventRepository{

  private static _instance: EventRepository;
  private constructor() { }
  public static get instance() {
    if (!EventRepository._instance) {
      EventRepository._instance = new EventRepository();
    }
    return EventRepository._instance;
  }

  async create(event: any) {
    return EventModel.create(event);
  }
  async getAll(filters: any) {
    const  { dateInit, dateEnd, type } = filters;
    console.log(type);
    return EventModel.aggregate().match({
      $or: [
        {'start': { $gte: new Date(dateInit) }},
        {'end': { $lte: new Date(dateEnd) }},

      ]
    })
      .match({
        $or: [
          { type: { $regex: type, $options: 'i' } },
        ]
      });
  }

  async getById(id: string) {
    return EventModel.findById(id);
  }

  async deleteById(id: string) {
    return EventModel.findByIdAndDelete(id);
  }

}

module.exports = EventRepository.instance;