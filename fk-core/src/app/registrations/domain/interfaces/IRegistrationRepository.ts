interface IRegistrationRepository {
  create(data: any): Promise<any>;
  getAllByEvent(eventID: string): Promise<any>;
  getById(id: string): Promise<any>;
  deleteById(id: string): Promise<any>;
}

export default IRegistrationRepository;