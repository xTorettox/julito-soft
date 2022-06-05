'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ManteinanceParameters extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ManteinanceParameters.init({
    maintenanceName: DataTypes.STRING,
    frequencyKm: DataTypes.INTEGER,
    frequencyYears: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ManteinanceParameters',
  });
  return ManteinanceParameters;
};