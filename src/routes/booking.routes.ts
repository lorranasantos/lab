import { Router } from 'express';
import CreateBookingController from '@controllers/CreateBookingController';
import { celebrate, Joi, Segments } from 'celebrate';
import isAuthenticated from 'src/middlewares/isAuthenticated';

const bookingRouter = Router();
const bookingController = new CreateBookingController();

//bookingRouter.get('/', bookingController.index);

bookingRouter.post(
  '/',
  isAuthenticated,
  celebrate({
    [Segments.BODY]: {
      idUserRequest: Joi.string().required(),
      idLaboratory: Joi.string().required(),
      date: Joi.date().required(),
      duration: Joi.number().required(),
    },
  }),
  bookingController.create,
);

/*bookingRouter.put(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
    [Segments.BODY]: {
      idUserRequest: Joi.string(),
      idLaboratory: Joi.string(),
      date: Joi.date(),
      duration: Joi.number(),
    },
  }),
  bookingController.update,
);

bookingRouter.delete(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
  }),
  bookingController.delete,
);*/

export default bookingRouter;
