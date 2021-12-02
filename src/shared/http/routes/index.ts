import equipamentsRouter from '@modules/equipaments/routes/equipaments.routs';
import {Router} from 'express';

const routes = Router();

routes.use('/equipaments', equipamentsRouter);

routes.get('/', (request, response) => {
  return response.json({message: 'Hello Dev!'});

});
export default routes;
