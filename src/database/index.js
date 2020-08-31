import Sequelize from 'sequelize';

import Cars from '../cars/models/Cars';

import databaseConfig from '../config/database.cjs';

const models = [Cars];

class Database {
  constructor(){
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);
    
    models
        .map(model => model.init(this.connection))
        .map(model => model.associate && model.associate(this.connection.models));
  }

}

export default new Database();