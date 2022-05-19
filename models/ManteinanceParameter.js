'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ManteinanceParameter extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ManteinanceParameter.init({
    manteinance_name: DataTypes.STRING,
    frequency_km: DataTypes.INTEGER,
    frequency_years: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ManteinanceParameter',
  });
  return ManteinanceParameter;
};