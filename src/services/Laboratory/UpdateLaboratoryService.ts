import UserType from '@entities/UserType';
import AppError from '@config/AppErrors';
import { Laboratory } from '@entities/Laboratory';

import { LabRepository } from 'src/database';
interface IRequest {
  id: 'int';
  name: string;
  capacity: 'int';
  equipments_qtd: 'int';
}

class UpdateLaboratoryService {
  public async execute({
    id,
    name,
    capacity,
    equipments_qtd,
  }: IRequest): Promise<Laboratory> {
    const laboratory = await LabRepository.findOne({ where: { id } });

    if (!laboratory) {
      throw new AppError('User Type not found');
    }

    laboratory.name = name;
    laboratory.capacity = capacity;
    laboratory.equipments_qtd = equipments_qtd;

    await LabRepository.save(laboratory);

    return laboratory;
  }
}

export default UpdateLaboratoryService;
