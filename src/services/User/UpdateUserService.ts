import { User } from '@entities/User';
import AppError from '@config/AppErrors';
import { UserRepository } from 'src/database';

interface IRequest {
  id: 'int';
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
    const user = await UserRepository.findOne({ where: { id } });

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
