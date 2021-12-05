import { getCustomRepository } from 'typeorm';
import Customers from '../entities/Customer';
import CustomersRepository from '../repositories/CustomersRepository';

class ListCustomerService {
  public async execute(): Promise<Customers[]> {
    const customersRepository = getCustomRepository(CustomersRepository);

    const customers = customersRepository.find();

    return customers;
  }
}

export default ListCustomerService;