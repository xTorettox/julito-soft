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
      ServiceItem.belongsTo(models.WorkOrder, {
        foreignKey:'id',
        targetKey:'id'
      })
    }
  }
  ServiceItem.init({
    service_id: DataTypes.INTEGER,
    service_item_description: DataTypes.STRING,
    service_item_solution: DataTypes.STRING,
    service_item_approved: DataTypes.BOOLEAN,
    service_item_solved: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'ServiceItem',
  });
  return ServiceItem;
};