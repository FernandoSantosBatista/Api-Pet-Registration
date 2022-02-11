import { Router } from 'express';
import userRoutes from './user';
import sessionRoutes from './session';
import dogsRoutes from './dogs';

const routes = Router();
const prefixRoutes = '/api/v1';

routes.get('/', (request, response) =>
  response.json({ message: 'Hello Code83' }),
);

routes.use(`${prefixRoutes}/sessions`, sessionRoutes);
routes.use(`${prefixRoutes}/users`, userRoutes);
routes.use(`${prefixRoutes}/dogs`, dogsRoutes);

export default routes;
