import { Sequelize, Model } from 'sequelize';

class Cars extends Model{
  static init(sequelize) {
    super.init(
      {
        brand: Sequelize.STRING,
        model:Sequelize.STRING,
        year: Sequelize.INTEGER,
        gas_type: Sequelize.STRING,
        price: Sequelize.INTEGER,
        color: Sequelize.STRING
      },
      {
        sequelize,
        tableName: 'cars'
      }
    );

      return this;
  }
}

export default Cars;