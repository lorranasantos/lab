import { DataSource } from 'typeorm';
import dotenv from 'dotenv';
import { Laboratory } from '@entities/Laboratory';
import { User } from '@entities/User';
import UserType from '@entities/UserType';

dotenv.config();

const connectDB = new DataSource({
  name: 'postgres',
  url: 'postgres://postgres:bcd127@localhost:5432/laboratory?sslmode=disable',
  type: 'postgres',
  logging: false,
  synchronize: true,
  host: 'localhost',
  port: 5432,
  entities: ['./src/entities/**/*.ts'],
  migrations: ['./src/database/migrations/**/*.ts'],
  extra: {
    ssl: {
      rejectUnauthorized: false,
    },
  },
});

connectDB
  .initialize()
  .then(() => {
    console.log(`Conectado ao banco de dados`);
  })
  .catch(err => {
    console.error(`Erro se conectando ao banco de dados.`, err);
  });

export const Manager = connectDB.manager;
export const UserRepository = connectDB.getRepository(User);
export const LabRepository = connectDB.getRepository(Laboratory);
export const UserTypeRepository = connectDB.getRepository(UserType);

export default connectDB;
