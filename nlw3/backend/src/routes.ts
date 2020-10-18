
import{Router} from 'express';
import OrphanagesController from './controllers/OrphanagesController';
import multer from 'multer';
import uploadConfig from './config/upload';

const routes= Router();
const upload= multer(uploadConfig);
//MVC MODEL=REPRESENTAÇÃO DO  BANCO DE DADOS, VIEWS COMO E VISUALIZADO , CONTROLLERS (LOGICA)



routes.post('/orphanages',upload.array('images'),OrphanagesController.create);
routes.get('/orphanages',OrphanagesController.index);
routes.get('/orphanages/:id',OrphanagesController.show  );

export default routes;