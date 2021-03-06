import Cars from '../models/Cars';

import * as Yup from 'yup';

class CreateCarsService {
  async execute(req, res) {
    const schema = Yup.object().shape({
      brand: Yup.string().required(),
      model: Yup.string().required(),
      year: Yup.number().required(),
      gas_type: Yup.string().required(),
      color: Yup.string().required(),
      price: Yup.number().required(),
    });

    const carsProperties = req.body;

    if(!(schema.isValid(carsProperties))) {
      return res.status(400).json({ error: "Validation error"});
    }

    try{
      const createCars = await Cars.create(carsProperties);

      return res.status(200).json(createCars);
    } catch(err) {
      
      return res.status(400).json(err.message);
    }
  }
}

export default new CreateCarsService();