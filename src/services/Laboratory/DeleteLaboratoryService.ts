import AppError from '@config/AppErrors';

import { LabRepository } from 'src/database';

interface IRequest {
  id: string;
}

class DeleteLaboratoryService {
  public async execute({ id }: IRequest): Promise<void> {
    const laboratory = await LabRepository.findOne({ where: { id } });

    if (!laboratory) {
      throw new AppError('Laboratory not found');
    }

    await LabRepository.remove(laboratory);
  }
}

export default DeleteLaboratoryService;
