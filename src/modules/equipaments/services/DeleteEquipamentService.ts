import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import equipament from '../typeorm/entities/equipament';
import {EquipamentsRepository} from '../typeorm/repositories/EquipamentsRepository';

interface IRequest {
  id: string;
}

class DeleteProductService {
  public async execute({ id }: IRequest): Promise<void> {
    const equipamentsRepository = getCustomRepository(EquipamentsRepository);

    const equipament= await EquipamentsRepository.findOne(id);

    if (!equipament) {
      throw new AppError('Equipament not found.');
    }

    await EquipamentsRepository.remove(equipament);
  }
}

export default DeleteEquipamentService;