'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Jobs extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Jobs.init({
    jobDescription: DataTypes.STRING,
    jobDurationHours: DataTypes.FLOAT,
    jobPrice: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'Jobs',
  });
  return Jobs;
};