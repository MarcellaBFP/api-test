
import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import equipament from '../typeorm/entities/equipament';
import { EquipamentsRepository } from '../typeorm/repositories/EquipamentsRepository';

interface IRequest {
  id: string;
  name: string;
  serial_number: string;
}

class UpdateEquipamentsService {
  public async execute({
    id,
    name,
    serial_number,
  }: IRequest): Promise<equipament> {
    const equipamentsRepository = getCustomRepository(EquipamentsRepository);

    const equipament = await equipamentsRepository.findOne(id);

    if (!equipament) {
      throw new AppError('Equipament not found.');
    }

    const equipamentsExists = await equipamentsRepository.findByName(serial_number);

    if (equipamentsExists && serial_number != equipament.serial_number) {
      throw new AppError('There is already one equipament with this serial number');
    }

    equipament.serial_number = serial_number;
    equipament.name = name;


    await equipamentsRepository.save(equipament);

    return equipament;
  }
}

export default UpdateEquipamentsService;