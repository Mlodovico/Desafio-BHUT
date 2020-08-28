import express from 'express';
import cors from 'cors';

import CreateCarsService from '../cars/services/CreateCarsService.js';
import ListCarsService from '../cars/services/ListCarsService.js';

const app = express();

app.use(express.json());
app.use(cors());

// const repositoriesCars = [];

app.get('/list', ListCarsService.execute);
app.post('/create', CreateCarsService.execute);

/*app.put('/update/:id', async (req, res) => {
  const { id, brand, model, year, gas_type, price, color } = req.body;

  const checkIdCar = repositoriesCars.find({where: 'id' == id});

  if(!checkIdCar) {
    return res.status(400).json({ error: 'id not found'});
  }

  const updatingCar = repositoriesCars.filter('id').push(brand, model, year, gas_type, price, color)

  return res.status(200).json(updatingCar)
}); */

app.delete('/delete/:id', async (req, res) => {

});

export default app;