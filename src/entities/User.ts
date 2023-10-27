import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import UserType from './UserType';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('increment')
  id: 'int';

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  cpf: string;

  @Column()
  password: string;

  @Column()
  phone: string;

  @Column()
  isActive: boolean;

  @Column()
  idUserType: string;

  @ManyToOne(() => UserType)
  @JoinColumn({ name: 'idUserType' })
  userType: UserType;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
