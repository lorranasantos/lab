import CreateLaboratoryService from '@services/Laboratory/CreateLaboratoryService';
import DeleteLaboratoryService from '@services/Laboratory/DeleteLaboratoryService';
import ListLaboratoryService from '@services/Laboratory/ListLaboratoryService';
import UpdateLaboratoryService from '@services/Laboratory/UpdateLaboratoryService';
import { Request, Response } from 'express';

export default class LaboratoryController {
  public async index(request: Request, response: Response): Promise<Response> {
    const listLaboratory = new ListLaboratoryService();

    const laboratory = await listLaboratory.execute();

    return response.json(laboratory);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { name, capacity, equipments_qtd } = request.body;

    //console.log(request.user.id);

    const createLaboratory = new CreateLaboratoryService();

    const laboratory = await createLaboratory.execute({
      name,
      capacity,
      equipments_qtd,
    });

    return response.json(laboratory);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { name, capacity, equipments_qtd } = request.body;
    const { id } = request.params;

    const updateLaboratory = new UpdateLaboratoryService();

    const laboratory = await updateLaboratory.execute({
      id,
      name,
      capacity,
      equipments_qtd,
    });

    return response.json(laboratory);
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const deleteLaboratory = new DeleteLaboratoryService();

    await deleteLaboratory.execute({ id });

    return response.json([]);
  }
}
