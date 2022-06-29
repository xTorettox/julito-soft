'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Vehicle extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Vehicle.belongsTo(models.Fleet, {
        sourceKey: 'fleet'
      })
      Vehicle.hasMany(models.WorkOrder, {
        foreignKey: 'fleet'
      })
    }
  }
  Vehicle.init({
    domain: DataTypes.STRING,
    vin_number: DataTypes.STRING,
    motor_number: DataTypes.STRING,
    brand: DataTypes.STRING,
    model: DataTypes.STRING,
    year: DataTypes.INTEGER,
    kilometers: DataTypes.INTEGER,
    fleet: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Vehicle',
  });
  return Vehicle;
};