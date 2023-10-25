import UserType from '@entities/UserType';
import AppError from '@config/AppErrors';
import { UserTypeRepository } from 'src/database';

interface IRequest {
  id: string;
}

class DeleteUserTypeService {
  public async execute({ id }: IRequest): Promise<void> {
    const userType = await UserTypeRepository.findOne({ where: { id } });

    if (!userType) {
      throw new AppError('User Type not found');
    }

    await UserTypeRepository.remove(userType);
  }
}

export default DeleteUserTypeService;
