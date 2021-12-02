import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import Equipament from '../typeorm/entities/equipament';
import {EquipamentsRepository} from '../typeorm/repositories/EquipamentsRepository';

interface IRequest {
  id: string;
}

class ShowEquipamentService {
  public async execute({ id }: IRequest): Promise<Equipament>{
    const equipamentsRepository = getCustomRepository(EquipamentsRepository);

    const equipament= await equipamentsRepository.findOne(id);

    if (!equipament) {
      throw new AppError('Product not found.');
    }

    return equipament;
  }
}

export default ShowEquipamentService;