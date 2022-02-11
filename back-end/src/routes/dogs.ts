import multerConfig from '@config/multer';
import { Router } from 'express';
import multer from 'multer';
import DogsController from 'src/controllers/DogsController';

const dogsRoutes = Router();
const dogsController = new DogsController();

dogsRoutes.get('/', dogsController.index);
dogsRoutes.get('/:id', dogsController.show);

dogsRoutes.post(
  '/',
  multer(multerConfig).single('logo'),
  dogsController.create,
);

dogsRoutes.put(
  '/:id/upload',
  multer(multerConfig).single('logo'),
  dogsController.uploadLogo,
);

dogsRoutes.get('/', dogsController.index);
dogsRoutes.get('/paginated', dogsController.paginated);
dogsRoutes.get('/search', dogsController.search);
dogsRoutes.post('/', dogsController.create);
dogsRoutes.put('/:id', dogsController.update);
dogsRoutes.delete('/:id', dogsController.destroy);

export default dogsRoutes;
