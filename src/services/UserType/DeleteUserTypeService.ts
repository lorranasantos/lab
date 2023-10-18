import UserType from '@entities/UserType';
import AppError from '@config/AppErrors';


import { UserTypeRepository } from 'src/database';
// IMPORTEI DO ARQUIVO INDEX DO DATABASE, eu exportei os Repository de la 

//A FORMA COMO ESTAVA ANTES ERA MUITO ANTIGA E NAO FUNCIONAVA MAIS

// export const UserRepository = connectDB.getRepository(User)
// export const LabRepository = connectDB.getRepository(Laboratory)
// export const UserTypeRepository = connectDB.getRepository(UserType)

interface IRequest {
  id: string;
}

class DeleteUserTypeService {
  public async execute({ id }: IRequest): Promise<void> {

    const userType = await UserTypeRepository.findOne({where:{id}});

    if (!userType) {
      throw new AppError('User Type not found');
    }

    await UserTypeRepository.remove(userType);
  }
}

export default DeleteUserTypeService;
