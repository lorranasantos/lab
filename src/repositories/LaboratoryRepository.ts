import { Laboratory } from '@entities/Laboratory';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(Laboratory)
class LaboratoryRepository extends Repository<Laboratory> {
  public async findByName(name: string): Promise<Laboratory | undefined> {
    const user = await this.findOne({
      where: {
        name,
      },
    });

    return user;
  }

  public async findById(id: string): Promise<Laboratory | undefined> {
    const user = await this.findOne({
      where: {
        id,
      },
    });

    return user;
  }
}

export default LaboratoryRepository;
