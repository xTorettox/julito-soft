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
    serviceId: DataTypes.INTEGER,
    serviceItemId: DataTypes.INTEGER,
    serviceItemDescription: DataTypes.STRING,
    serviceItemSolution: DataTypes.STRING,
    serviceItemApproved: DataTypes.BOOLEAN,
    serviceItemSolved: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Service_item',
  });
  return ServiceItem;
};