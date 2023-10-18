import AppError from '@config/AppErrors';

import { LabRepository } from 'src/database';
// IMPORTEI DO ARQUIVO INDEX DO DATABASE, eu exportei os Repository de la 

//A FORMA COMO ESTAVA ANTES ERA MUITO ANTIGA E NAO FUNCIONAVA MAIS

// export const UserRepository = connectDB.getRepository(User)
// export const LabRepository = connectDB.getRepository(Laboratory)
// export const UserTypeRepository = connectDB.getRepository(UserType)

interface IRequest {
  id: string;
}

class DeleteLaboratoryService {
  public async execute({ id }: IRequest): Promise<void> {

    const laboratory = await LabRepository.findOne({where: {id,}});

    if (!laboratory) {
      throw new AppError('Laboratory not found');
    }

    await LabRepository.remove(laboratory);
  }
}

export default DeleteLaboratoryService;
