//import Database from '../database/index.js';

class ListCarsService {
  async execute(req, res) {
    return res.status(200).json({ message: 'ok'});
  }
}

export default new ListCarsService();