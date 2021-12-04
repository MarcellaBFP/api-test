import { Router } from 'express';
import equipamentsRouter from '@modules/equipaments/routes/equipaments.routs';
import usersRouter from '@modules/users/routes/users.routes';

const routes = Router();

routes.use('/equipaments', equipamentsRouter);
routes.use('/users', usersRouter);

export default routes;