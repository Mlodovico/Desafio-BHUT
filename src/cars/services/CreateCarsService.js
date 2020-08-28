import * as Yup from 'yup';

import Cars from '../models/Cars.js';

class CreateCarsService {
  async execute(req, res) {
    /**
     *  const schema = Yup.object().shape({
      brand: Yup.string().required(),
      model: Yup.string().required(),
      year: Yup.number().required(),
      gas_type: Yup.string().required(), 
      price: Yup.number().required(), 
      color: Yup.string().required(),
    });

    if(!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation error'});
    };
     */
    const { 
      brand, 
      model, 
      year, 
      gas_type, 
      price, 
      color 
    } = await Cars.create(req.body);

    const AddingCarToRepository = { 
      brand, 
      model, 
      year, 
      gas_type, 
      price, 
      color 
    };
    
    

    return res.status(200).json(AddingCarToRepository);
  }
}

export default new CreateCarsService();