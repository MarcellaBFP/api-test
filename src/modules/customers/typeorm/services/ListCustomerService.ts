import { getCustomRepository } from 'typeorm';
import Customers from '../entities/Customer';
import CustomersRepository from '../repositories/CustomersRepository';

interface IPaginateCustomer {
  from: number;
  to: number;
  per_page: number;
  total: number;
  current_page: number;
  prev_page: number | null;
  next_page: number | null;
  data: Customers[];
}
class ListCustomerService {
  public async execute(): Promise<IPaginateCustomer> {
    const customersRepository = getCustomRepository(CustomersRepository);

    const customers = customersRepository.createQueryBuilder().paginate();
    return customers as unknown as IPaginateCustomer;
  }
}

export default ListCustomerService;