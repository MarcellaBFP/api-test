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

    await equipamentsRepository.remove(equipament);
  }
}

export default DeleteEquipamentService;