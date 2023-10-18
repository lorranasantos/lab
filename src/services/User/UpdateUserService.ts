import { User } from '@entities/User';
import UserType from '@entities/UserType';
import AppError from '@config/AppErrors';


import { UserRepository } from 'src/database';
// IMPORTEI DO ARQUIVO INDEX DO DATABASE, eu exportei os Repository de la 

//A FORMA COMO ESTAVA ANTES ERA MUITO ANTIGA E NAO FUNCIONAVA MAIS

// export const UserRepository = connectDB.getRepository(User)
// export const LabRepository = connectDB.getRepository(Laboratory)
// export const UserTypeRepository = connectDB.getRepository(UserType)



interface IRequest {
  id: string;
  name: string;
  email: string;
  cpf: string;
  password: string;
  isActive: boolean;
  phone: string;
  idUserType: string;
}

class UpdateUserService {
  public async execute({
    id,
    name,
    email,
    cpf,
    password,
    phone,
    isActive,
    idUserType,
  }: IRequest): Promise<User> {

    const user = await UserRepository.findOne({where:{id}});

    if (!user) {
      throw new AppError('User not found');
    }

    user.name = name;
    user.email = email;
    user.cpf = cpf;
    user.password = password;
    user.isActive = isActive;
    user.phone = phone;
    user.idUserType = idUserType;

    await UserRepository.save(user);

    return user;
  }
}

export default UpdateUserService;
