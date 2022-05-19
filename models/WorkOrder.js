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
    vehicle_id: DataTypes.INTEGER,
    order_date: DataTypes.DATE,
    order_km: DataTypes.INTEGER,
    fuel_level: DataTypes.STRING,
    pre_order_comments: DataTypes.STRING,
    post_order_comments: DataTypes.STRING,
    next_service_recommendations: DataTypes.STRING,
    service_item_collection: DataTypes.INTEGER,
    spare_parts_collection: DataTypes.INTEGER,
    job_collection: DataTypes.INTEGER,
    order_amount: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'WorkOrder',
  });
  return WorkOrder;
};