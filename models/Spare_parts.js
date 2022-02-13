'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Spare_parts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Spare_parts.init({
    partDescription: DataTypes.STRING,
    partNumber: DataTypes.STRING,
    partPrice: DataTypes.FLOAT,
    partStock: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Spare_parts',
  });
  return Spare_parts;
};