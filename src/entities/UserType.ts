import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
// import { v4 as uuid } from 'uuid';

@Entity('userTypes')
export class UserType {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  user_type: string;
}

export default UserType;
