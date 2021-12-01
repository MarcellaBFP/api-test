import { EntityRepository, Repository } from 'typeorm';
import equipament from '../entities/equipament';
import Product from '../entities/equipament';

@EntityRepository(Product)
export class EquipamentsRepository extends Repository<equipament> {
  public async findByName(name: string): Promise<equipament| undefined> {
    const equipament = this.findOne({
      where: {
        name,
      },
    });

    return equipament;
  }
}