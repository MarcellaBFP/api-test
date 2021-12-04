import { Router } from 'express';
import equipamentsRouter from '@modules/equipaments/routes/equipaments.routs';
import usersRouter from '@modules/users/routes/users.routes';
import sessionsRouter from '@modules/users/routes/sessions.routes';

const routes = Router();

routes.use('/equipaments', equipamentsRouter);
routes.use('/users', usersRouter);
routes.use('/sessions', sessionsRouter);

export default routes;