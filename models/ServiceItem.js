'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ServiceItem extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ServiceItem.init({
    itemDescription: DataTypes.STRING,
    itemSolution: DataTypes.STRING,
    itemApproved: DataTypes.BOOLEAN,
    itemSolved: DataTypes.BOOLEAN,
    workOrder: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ServiceItem',
  });
  return ServiceItem;
};