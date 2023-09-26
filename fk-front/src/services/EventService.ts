import axios from "axios";
import Event from "../model/Event";

class EventService {
  //singleton
  private static _instance: EventService;
  private constructor() {}
  public static get instance() {
    return this._instance || (this._instance = new this());
  }

  async getEvents(url: string, dataFilter: any) {
    try {
      const res = await axios.post(url, dataFilter);
      return res.data;
    } catch (err) {
      return console.log(err);
    }
  }

  async getEventById(url: string) {
    try {
      const res = await axios.get(url);
      return res.data;
    } catch (err) {
      return console.log(err);
    }
  }

  async createEvent(url: string, event: Event) {
    return axios.post(url, event)
      .then((res) => res.data)
      .catch((err) => console.log(err));
  }

}

export default EventService.instance;