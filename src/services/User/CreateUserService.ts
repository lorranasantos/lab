import { User } from '@entities/User';
import AppError from '@config/AppErrors';

import { UserRepository } from 'src/database';
import { hash } from 'bcryptjs';

interface IRequest {
  name: string;
  email: string;
  cpf: string;
  password: string;
  isActive: boolean;
  phone: string;
  idUserType: string;
}

class CreateUserService {
  public async execute({
    name,
    email,
    cpf,
    password,
    isActive,
    phone,
    idUserType,
  }: IRequest): Promise<User> {
    const emailExists = await UserRepository.findOne({ where: { email } });
    const cpfExists = await UserRepository.findOne({ where: { cpf } });
    const phoneExists = await UserRepository.findOne({ where: { phone } });

    if (emailExists) {
      throw new AppError('Email address already used!');
    }

    const hashedPassword = await hash(password, 8);

    const user = UserRepository.create({
      name,
      email,
      cpf,
      password: hashedPassword,
      isActive,
      phone,
      idUserType,
    });

    await UserRepository.save(user);

    return user;
  }
}

export default CreateUserService;
