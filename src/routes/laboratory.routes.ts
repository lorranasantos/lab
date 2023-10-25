import { Router } from 'express';
import CreateLaboratoryController from '@controllers/CreateLaboratoryController';
import { celebrate, Joi, Segments } from 'celebrate';
import isAuthenticated from 'src/middlewares/isAuthenticated';

const laboratoryRouter = Router();
const laboratoryController = new CreateLaboratoryController();

laboratoryRouter.get('/', laboratoryController.index);

laboratoryRouter.post(
  '/',
  //isAuthenticated,
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      capacity: Joi.number().required(),
      equipments_qtd: Joi.number().required(),
    },
  }),
  laboratoryController.create,
);

laboratoryRouter.put(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
    [Segments.BODY]: {
      name: Joi.string(),
      capacity: Joi.number(),
      equipment_qtd: Joi.number(),
    },
  }),
  laboratoryController.update,
);

laboratoryRouter.delete(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
  }),
  laboratoryController.delete,
);

export default laboratoryRouter;
