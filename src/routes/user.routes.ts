import { Router } from 'express';
import { celebrate, Segments } from 'celebrate';
import UsersController from '@controllers/UsersController';
import Joi from 'joi';
import isAuthenticated from 'src/middlewares/isAuthenticated';

const usersRouter = Router();

const usersController = new UsersController();

usersRouter.get('/', usersController.index);

usersRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      email: Joi.string().email().required(),
      password: Joi.string().required(),
      cpf: Joi.string().required(),
      phone: Joi.string().required(),
      isActive: Joi.boolean().required(),
      idUserType: Joi.string().required(),
    },
  }),
  usersController.create,
);

usersRouter.put(
  '/',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
    [Segments.BODY]: {
      name: Joi.string(),
      email: Joi.string().email(),
      password: Joi.string(),
      cpf: Joi.string(),
      phone: Joi.string(),
      isActive: Joi.boolean(),
      idUserType: Joi.string(),
    },
  }),
  usersController.update,
);

usersRouter.delete(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
  }),
  usersController.delete,
);

export default usersRouter;
