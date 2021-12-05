import { getCustomRepository } from 'typeorm';
import Customers from '../entities/Customer';
import CustomersRepository from '../repositories/CustomersRepository';
import AppError from '@shared/errors/AppError';
import { compare, hash } from 'bcryptjs';
import User from '@modules/users/typeorm/entities/User';


interface IRequest {
  id: string;
  name: string;
  email: string;
}

class UpdateCustomerService {
  public async execute({ id, name, email }: IRequest): Promise<User> {
    const customersRepository = getCustomRepository(CustomersRepository);

    const customer = await customersRepository.findById(id);

    if (!customer) {
      throw new AppError('Customer not found.');
    }

    const customerExists = await customersRepository.findByEmail(email);

    if (customerExists && email !== customer.email) {
      throw new AppError('There is already one customer with this email.');
    }

    customer.name = name;
    customer.email = email;

    await customersRepository.save(customer);

    return customer;
  }
}

export default UpdateCustomerService;