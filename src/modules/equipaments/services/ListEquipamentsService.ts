import { getCustomRepository } from 'typeorm';
import equipament from '../typeorm/entities/equipament';
import {EquipamentsRepository}from '../typeorm/repositories/EquipamentsRepository';
import RedisCache from '@shared/cache/RedisCache';

class ListEquipamentsService {
  public async execute(): Promise<equipament[]> {
    const equipamentsRepository = getCustomRepository(EquipamentsRepository);

    const redisCache = new RedisCache();

    let equipaments = await redisCache.recover<equipament[]>(
      'api-test-EQUIPAMENT_LIST',
    );

    if (!equipaments){
           equipaments = await equipamentsRepository.find();
           await redisCache.save(  'api-test-EQUIPAMENT_LIST',equipaments);
    }

    await redisCache.save('test', 'test');

    return equipaments;
  }
}

export default ListEquipamentsService;