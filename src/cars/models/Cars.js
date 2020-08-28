import { Model, Sequelize } from 'sequelize';

class Cars extends Model{
  static init(sequelize) {
    super.init(
      {
        brand: Sequelize.STRING,
        model:Sequelize.STRING,
        year: Sequelize.INTEGER,
        gas_type: Sequelize.STRING,
        price: Sequelize.STRING,
        color: Sequelize.STRING
      },
      {
        sequelize,
        tableName:'cars',
      }
    );

      return this;
  }
}

export default Cars;