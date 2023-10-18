
import { Laboratory } from '@entities/Laboratory';
import { User } from '@entities/User';
import LaboratoryRepository from 'src/repositories/LaboratoryRepository';
import { getCustomRepository } from 'typeorm';


import { LabRepository } from 'src/database';
// IMPORTEI DO ARQUIVO INDEX DO DATABASE, eu exportei os Repository de la 

//A FORMA COMO ESTAVA ANTES ERA MUITO ANTIGA E NAO FUNCIONAVA MAIS

// export const UserRepository = connectDB.getRepository(User)
// export const LabRepository = connectDB.getRepository(Laboratory)
// export const UserTypeRepository = connectDB.getRepository(UserType)

class ListLaboratoryService {
  public async execute(): Promise<Laboratory[]> {

    const laboratory = LabRepository.find();

    return laboratory;
  }
}

export default ListLaboratoryService;
