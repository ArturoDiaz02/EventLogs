interface IEventRepository {
  create(data: any): Promise<any>;
  getAll(filters: any): Promise<any>;
  getById(id: string): Promise<any>;
  deleteById(id: string): Promise<any>;
}

export default IEventRepository;