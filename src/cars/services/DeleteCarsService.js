import Cars from '../models/Cars';;

class DeleteCarsService {
  async execute(req, res) {
    try {
      const car = await Cars.findByPk(req.params.id)

      if(!car) {

        return res.status(400).json({ error: "This cars does not exist"});
      }

      car.destroy(req.body);

      return res.status(200).json("Success deleted");
    } catch(err) {
      return res.status(500).json(err.message);
    }
  }
}

export default new DeleteCarsService();