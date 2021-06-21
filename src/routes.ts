import { Router } from 'express';
import ResponsavelController from './controllers/ResponsavelController'; 
import DespesasController from './controllers/DespesasController';


const routes = Router();

routes.get('/responsavel', ResponsavelController.index);
routes.get('/responsavel/:id', ResponsavelController.show);
routes.post('/responsavel', ResponsavelController.create);
routes.get('/responsavel/gastos/:id', ResponsavelController.mostraPeloGasto);

routes.post('/despesas', DespesasController.create);
routes.get('/despesas', DespesasController.index)
routes.get('/despesas/:id', DespesasController.show);
routes.put('/despesas/:id', DespesasController.update);
routes.delete('/despesas/:id', DespesasController.delete);

export default routes;