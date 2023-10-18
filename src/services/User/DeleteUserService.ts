import AppError from '@config/AppErrors';

import { UserRepository } from 'src/database';
// IMPORTEI DO ARQUIVO INDEX DO DATABASE, eu exportei os Repository de la 

//A FORMA COMO ESTAVA ANTES ERA MUITO ANTIGA E NAO FUNCIONAVA MAIS

// export const UserRepository = connectDB.getRepository(User)
// export const LabRepository = connectDB.getRepository(Laboratory)
// export const UserTypeRepository = connectDB.getRepository(UserType)

interface IRequest {
  id: string;
}

class DeleteUserService {
  public async execute({ id }: IRequest): Promise<void> {

    const user = await UserRepository.findOne({where:{id}});

    if (!user) {
      throw new AppError('User not found');
    }

    await UserRepository.remove(user);
  }
}

export default DeleteUserService;
