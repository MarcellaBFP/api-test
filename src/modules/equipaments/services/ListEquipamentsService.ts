import { getCustomRepository } from 'typeorm';
import equipament from '../typeorm/entities/equipament';
import {EquipamentsRepository}from '../typeorm/repositories/EquipamentsRepository';

class ListEquipamentsService {
  public async execute(): Promise<equipament[]> {
    const equipamentsRepository = getCustomRepository(EquipamentsRepository);

    const equipaments = equipamentsRepository.find();

    return equipaments;
  }
}

export default ListEquipamentsService;