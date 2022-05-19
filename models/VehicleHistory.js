'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class VehicleHistory extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  VehicleHistory.init({
    vehicle_id: DataTypes.INTEGER,
    service_collection: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'VehicleHistory',
  });
  return VehicleHistory;
};