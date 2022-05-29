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
      WorkOrder.belongsTo(models.Vehicle, {
        foreignKey:'id',
        targetKey:'vehicle'
      })
      WorkOrder.hasMany(models.SparePart, {
        foreignKey:'id'
      })
      WorkOrder.hasMany(models.Job, {
        foreignKey:'id'
      })
      WorkOrder.hasMany(models.ServiceItem, {
        foreignKey:'id'
      })
      WorkOrder.hasMany(models.Budget, {
        foreignKey:'id'
      })
    }
  }
  WorkOrder.init({
    vehicle_id: DataTypes.INTEGER,
    order_date: DataTypes.DATE,
    order_km: DataTypes.INTEGER,
    fuel_level: DataTypes.STRING,
    pre_order_comments: DataTypes.STRING,
    post_order_comments: DataTypes.STRING,
    next_service_recommendations: DataTypes.STRING,
    order_amount: DataTypes.FLOAT,
    order_open: DataTypes.BOOLEAN,
    next_visit: DataTypes.STRING,
    vehicle: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'WorkOrder',
  });
  return WorkOrder;
};