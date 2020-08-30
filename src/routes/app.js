import express from 'express';
import cors from 'cors';

import CreateCarsService from '../cars/services/CreateCarsService.js';
import ListCarsService from '../cars/services/ListCarsService.js';
import UpdateCarsService from '../cars/services/UpdateCarsService';
import DeleteCarsService from '../cars/services/DeleteCarsService';

const app = express();

app.use(express.json());
app.use(cors());

app.get('/list', ListCarsService.execute);
app.post('/create', CreateCarsService.execute);
app.put('/update/:id', UpdateCarsService.execute);
app.delete('/delete/:id', DeleteCarsService.execute);

export default app;