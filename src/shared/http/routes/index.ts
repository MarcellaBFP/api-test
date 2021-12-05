import { Router } from 'express';
import equipamentsRouter from '@modules/equipaments/routes/equipaments.routs';
import usersRouter from '@modules/users/routes/users.routes';
import sessionsRouter from '@modules/users/routes/sessions.routes';
import passwordRouter from '@modules/users/routes/password.routes';
import { profile } from 'console';
import profileRouter from '@modules/equipaments/routes/profile.routes';

const routes = Router();

routes.use('/equipaments', equipamentsRouter);
routes.use('/users', usersRouter);
routes.use('/sessions', sessionsRouter);
routes.use('/password', passwordRouter);
routes.use('/profile', profileRouter);

export default routes;