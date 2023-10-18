import CreateUserService from '@services/User/CreateUserService';
import DeleteUserService from '@services/User/DeleteUserService';
import ListUserService from '@services/User/ListUserService';
import UpdateUserService from '@services/User/UpdateUserService';
import { Request, Response } from 'express';

export default class UsersController {
  public async index(request: Request, response: Response): Promise<Response> {
    const listUser = new ListUserService();

    const users = await listUser.execute();

    return response.json(users);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { name, email, password, phone, isActive, cpf, idUserType } =
      request.body;

    const createUser = new CreateUserService();
    const user = await createUser.execute({
      name,
      email,
      password,
      phone,
      isActive,
      cpf,
      idUserType,
    });

    return response.json(user);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { name, email, cpf, password, phone, isActive, idUserType } =
      request.body;
    const { id } = request.params;

    const updateUser = new UpdateUserService();

    const user = await updateUser.execute({
      id,
      name,
      cpf,
      email,
      password,
      phone,
      isActive,
      idUserType,
    });

    return response.json(user);
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const deleteUser = new DeleteUserService();

    await deleteUser.execute({ id });

    return response.json([]);
  }
}
