interface IUserRepository {
  create(data: any): Promise<any>;
  getAll(): Promise<any>;
  getById(id: string): Promise<any>;
  deleteById(id: string): Promise<any>;
}

export default IUserRepository;