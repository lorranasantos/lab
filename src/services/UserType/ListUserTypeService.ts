import UserType from '@entities/UserType';
import { UserTypeRepository } from 'src/database';

class ListUserTypeService {
  public async execute(): Promise<UserType[]> {
    const userTypes = UserTypeRepository.find();

    return userTypes;
  }
}

export default ListUserTypeService;
