import laboratoryRouter from '@routes/laboratory.routes';
import sessionsRouter from '@routes/sessions.routes';
import usersRouter from '@routes/user.routes';
import userTypeRouter from '@routes/userType.routes';
import { Router } from 'express';

const routes = Router();

routes.use('/userType', userTypeRouter);
routes.use('/user', usersRouter);
routes.use('/laboratory', laboratoryRouter);
routes.use('/sessions', sessionsRouter);

export default routes;
