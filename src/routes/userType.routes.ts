import { Router } from 'express';
import CreateUserTypeController from '@controllers/CreateUserTypeController';
import { celebrate, Joi, Segments } from 'celebrate';

const userTypeRouter = Router();
const userTypeController = new CreateUserTypeController();

userTypeRouter.get('/', userTypeController.index);

userTypeRouter.post('/', userTypeController.create);

userTypeRouter.put(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
    [Segments.BODY]: {
      user_type: Joi.string().required(),
    },
  }),
  userTypeController.update,
);

userTypeRouter.delete(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
  }),
  userTypeController.delete,
);

export default userTypeRouter;
