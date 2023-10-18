import { EntityRepository, Repository } from 'typeorm';
import UserType from '@entities/UserType';

@EntityRepository(UserType)
export class UserTypeRepository extends Repository<UserType> {
  public async findByName(user_type: string): Promise<UserType | undefined> {
    const userType = this.findOne({
      where: {
        user_type,
      },
    });
    console.log(userType, 'eisiii');
    return userType;
  }
}
