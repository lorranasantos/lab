import AppError from '@config/AppErrors';
import { UserRepository } from 'src/database';

interface IRequest {
  id: string;
}

class DeleteUserService {
  public async execute({ id }: IRequest): Promise<void> {
    const user = await UserRepository.findOne({ where: { id } });

    if (!user) {
      throw new AppError('User not found');
    }

    await UserRepository.remove(user);
  }
}

export default DeleteUserService;
