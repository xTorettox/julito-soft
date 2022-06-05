'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SpareParts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  SpareParts.init({
    partDescription: DataTypes.STRING,
    partNumber: DataTypes.STRING,
    partLocation: DataTypes.STRING,
    partPrice: DataTypes.FLOAT,
    partStock: DataTypes.INTEGER,
    workOrder: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'SpareParts',
  });
  return SpareParts;
};