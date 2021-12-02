import { EntityRepository, Repository } from 'typeorm';
import equipament from '../entities/equipament';
import Product from '../entities/equipament';

@EntityRepository(Product)
export class EquipamentsRepository extends Repository<equipament> {
  static findOne(id: string) {
      throw new Error('Method not implemented.');
  }
  static findByName(serial_number: string) {
      throw new Error('Method not implemented.');
  }
  static save(equipament: any) {
      throw new Error('Method not implemented.');
  }
  public async findByName(name: string): Promise<equipament| undefined> {
    const equipament = this.findOne({
      where: {
        name,
      },
    });

    return equipament;
  }
}