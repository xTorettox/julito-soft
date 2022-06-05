'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class WorkOrder extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  WorkOrder.init({
    orderDate: DataTypes.DATE,
    orderKilometers: DataTypes.INTEGER,
    fuelLevel: DataTypes.STRING,
    preOrderComments: DataTypes.STRING,
    postOrderComments: DataTypes.STRING,
    nextServiceRecommendations: DataTypes.STRING,
    orderAmount: DataTypes.FLOAT,
    orderOpen: DataTypes.BOOLEAN,
    nextVisit: DataTypes.DATE,
    vehicle: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'WorkOrder',
  });
  return WorkOrder;
};