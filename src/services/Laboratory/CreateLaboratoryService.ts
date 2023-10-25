import AppError from '@config/AppErrors';
import { Laboratory } from '@entities/Laboratory';

import { LabRepository } from 'src/database';

interface IRequest {
  name: string;
  capacity: 'int';
  equipments_qtd: 'int';
}

class CreateLaboratoryService {
  public async execute({
    name,
    capacity,
    equipments_qtd,
  }: IRequest): Promise<Laboratory> {
    const nameExists = await LabRepository.findOne({ where: { name } });

    console.log('aq');

    if (nameExists) {
      throw new AppError('Name address already used!');
    }

    const laboratory = LabRepository.create({
      name,
      capacity,
      equipments_qtd,
    });

    await LabRepository.save(laboratory);

    return laboratory;
  }
}

export default CreateLaboratoryService;
