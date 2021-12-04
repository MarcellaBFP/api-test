import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import UsersRepository from '../typeorm/repositories/UsersRespository';
import UserTokensRepository from '../typeorm/repositories/UserTokensRepository';
import EtherealMail from '@config/mail/EtherealMail';

interface IRequest {
  email: string;
}

class SendForgotPasswordEmailService {
  static execute(arg0: {}) {
      throw new Error('Method not implemented.');
  }
  public async execute({ email }: IRequest): Promise<void> {
    const usersRepository = getCustomRepository(UsersRepository);
    const userTokensRepository = getCustomRepository(UserTokensRepository);

    const user = await UsersRepository.findByEmail(email);

    if (!user) {
      throw new AppError('User does not exists.');
    }

    console.log(user);

    const token = await userTokensRepository.generate(user.id);

    console.log(token);
    await EtherealMail.sendMail({
      to: email,
      body: `Password reset request received: ${token?.token}`,
    })
  }
}

export default SendForgotPasswordEmailService;