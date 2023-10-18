import CreateUserTypeService from '@services/UserType/CreateUserTypeService';
import DeleteUserTypeService from '@services/UserType/DeleteUserTypeService';
import ListUserTypeService from '@services/UserType/ListUserTypeService';
import UpdateUserTypeService from '@services/UserType/UpdateUserTypeService';
import { Request, Response } from 'express';

export default class UserTypeController {
  public async index(request: Request, response: Response): Promise<Response> {
    const listUserType = new ListUserTypeService();

    const userType = await listUserType.execute();

    return response.json(userType);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { user_type } = request.body;

    const createUserType = new CreateUserTypeService();

    const userType = await createUserType.execute({ user_type });

    return response.json(userType);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { user_type } = request.body;
    const { id } = request.params;

    const updateUserType = new UpdateUserTypeService();

    const userType = await updateUserType.execute({ id, user_type });

    return response.json(userType);
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const deleteUserType = new DeleteUserTypeService();

    await deleteUserType.execute({ id });

    return response.json([]);
  }
}
