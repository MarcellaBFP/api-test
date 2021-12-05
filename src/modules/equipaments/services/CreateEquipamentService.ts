import RedisCache from '@shared/cache/RedisCache';
import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import equipament from '../typeorm/entities/equipament';
import { EquipamentsRepository } from '../typeorm/repositories/EquipamentsRepository';

interface IRequest {
  name: string;
  serial_number: string;
}

class CreateEquipamentService {
  public async execute({ name, serial_number }: IRequest): Promise<equipament> {
    const equipamentsRepository = getCustomRepository(EquipamentsRepository);
    const equipamentsExists = await equipamentsRepository.findByName(serial_number);

    if (equipamentsExists) {
      throw new AppError('There is already one product with this name');
    }

    const redisCache = new RedisCache();

    const equipament = equipamentsRepository.create({
      name,
      serial_number,
    });

    await redisCache.invalidate(' api-test-EQUIPAMENT_LIST');

    await equipamentsRepository.save(equipament);

    return equipament;
  }
}

export default CreateEquipamentService;

function equipamentsRepository(equipamentsRepository: any) {
    throw new Error('Function not implemented.');
}
