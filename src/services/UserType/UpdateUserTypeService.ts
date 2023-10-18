import UserType from '@entities/UserType';
import AppError from '@config/AppErrors';
import { UserTypeRepository } from 'src/database';

interface IRequest {
  id: string;
  user_type: string;
}

class UpdateUserTypeService {
  public async execute({ id, user_type }: IRequest): Promise<UserType> {
    const userType = await UserTypeRepository.findOne({ where: { id } });

    if (!userType) {
      throw new AppError('User Type not found');
    }

    userType.user_type = user_type;

    await UserTypeRepository.save(userType);

    return userType;
  }
}

export default UpdateUserTypeService;
