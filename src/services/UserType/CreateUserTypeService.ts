import AppError from '@config/AppErrors';
import UserType from '@entities/UserType';
import { UserTypeRepository } from 'src/database';

interface IRequest {
  user_type: string;
}

class CreateUserTypeService {
  public async execute({ user_type }: IRequest): Promise<UserType> {
    const userTypeExists = await UserTypeRepository.findOne({
      where: { user_type },
    });

    if (userTypeExists) {
      throw new AppError('There is already one tipe with this name');
    }

    const userType = UserTypeRepository.create({ user_type });

    await UserTypeRepository.save(userType);

    return userType;
  }
}

export default CreateUserTypeService;
