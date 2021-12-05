import RedisCache from '@shared/cache/RedisCache';
import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import {EquipamentsRepository} from '../typeorm/repositories/EquipamentsRepository';

interface IRequest {
  id: string;
}

class DeleteEquipamentService {
  public async execute({ id }: IRequest): Promise<void> {
    const equipamentsRepository = getCustomRepository(EquipamentsRepository);

    const equipament= await equipamentsRepository.findOne(id);

    if (!equipament) {
      throw new AppError('Equipament not found.');
    }

        const redisCache = new RedisCache();

    await redisCache.invalidate(' api-test-EQUIPAMENT_LIST');

    await equipamentsRepository.remove(equipament);
  }
}

export default DeleteEquipamentService;