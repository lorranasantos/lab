import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('laboratories')
export class Laboratory {
  @PrimaryGeneratedColumn('increment')
  id: 'int';

  @Column()
  name: string;

  @Column()
  capacity: 'int';

  @Column()
  equipments_qtd: 'int';

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
