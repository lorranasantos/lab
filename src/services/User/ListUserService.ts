import { User } from '@entities/User';
import { UserRepository } from 'src/database';

class ListUserService {
  public async execute(): Promise<User[]> {
    const users = UserRepository.find();

    return users;
  }
}

export default ListUserService;
