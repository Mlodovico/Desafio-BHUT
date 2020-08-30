import * as Yup from 'yup';

import Cars from '../models/Cars';

class UpdateCarsService {
  async execute(req, res) {
    const schema = Yup.object().shape({
      brand: Yup.string().required(),
      model: Yup.string().required(),
      year: Yup.number().required(),
      gas_type: Yup.string().required(),
      color: Yup.string().required(),
      price: Yup.number().required(),
    });

    if(!(schema.isValid(req.body))){
      return res.status(400).json({ error: 'Validation error' });
    }

    try {
      const car = await Cars.findByPk(req.params.id);
      console.log(car);

      const { 
        id, 
        brand, 
        model, 
        year, 
        gas_type, 
        color, 
        price
      } = await Cars.update(req.body);

      return res.status(200).json({
        id, 
        brand, 
        model, 
        year, 
        gas_type, 
        color, 
        price 
      });
    } catch (err) {
      return res.status(400).json(err.message);
    }
  }
}

export default new UpdateCarsService();