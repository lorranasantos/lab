import UserType from '@entities/UserType';


import { UserTypeRepository } from 'src/database';
// IMPORTEI DO ARQUIVO INDEX DO DATABASE, eu exportei os Repository de la 

//A FORMA COMO ESTAVA ANTES ERA MUITO ANTIGA E NAO FUNCIONAVA MAIS

// export const UserRepository = connectDB.getRepository(User)
// export const LabRepository = connectDB.getRepository(Laboratory)
// export const UserTypeRepository = connectDB.getRepository(UserType)

class ListUserTypeService {
  public async execute(): Promise<UserType[]> {

    const userTypes = UserTypeRepository.find();

    return userTypes;
  }
}

export default ListUserTypeService;
