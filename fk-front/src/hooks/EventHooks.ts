import useSWR from "swr";
import EventService from "../services/EventService";
import { EVENT_API_URL } from "../config";

interface DataFilter {
  search: string;
  dateInit: string;
  dateEnd: string;
  type: string;
}

const getStringFromObject = (obj: any) => {
  let str = "";
  for (let key in obj) {
    str += `&${key}=${obj[key]}`;
  }
  return str;
}

export const useEvents = (dataFilter: DataFilter) => {
  const { data, isLoading, error } = useSWR(`${EVENT_API_URL}/filters/${getStringFromObject(dataFilter)}`, () => EventService.getEvents(`${EVENT_API_URL}/filters`, dataFilter));
  return {
    events: data || [],
    isLoading: isLoading,
    isError: error,
  };
}

export const useEventById = (id: string) => {
  const { data, error } = useSWR(`${EVENT_API_URL}/${id}`, EventService.getEventById);
  return {
    event: data || [],
    isLoading: !error && !data,
    isError: error,
  };
}
