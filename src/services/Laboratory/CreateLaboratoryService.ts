import AppError from '@config/AppErrors';
import { Laboratory } from '@entities/Laboratory';

import { LabRepository } from 'src/database';
// IMPORTEI DO ARQUIVO INDEX DO DATABASE, eu exportei os Repository de la 

//A FORMA COMO ESTAVA ANTES ERA MUITO ANTIGA E NAO FUNCIONAVA MAIS

// export const UserRepository = connectDB.getRepository(User)
// export const LabRepository = connectDB.getRepository(Laboratory)
// export const UserTypeRepository = connectDB.getRepository(UserType)


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

    const nameExists = await LabRepository.findOne({where:{name,}});

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
