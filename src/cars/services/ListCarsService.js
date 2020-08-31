import Cars from '../models/Cars';

class ListCarsService {
  async execute(req, res) {
    try {

      const listCars = await Cars.findAll({
        attributes: [ 'id', 'brand', 'model', 'year', 'price', 'color' ],
      });

      return res.status(200).json(listCars);
    } catch (err) {

      return res.status(400).json(err.message);
    }
  }
}

export default new ListCarsService();