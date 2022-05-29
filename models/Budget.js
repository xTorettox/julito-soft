'use strict';
const {
  Model
} = require('sequelize');
const { ButtonGroup } = require('sveltestrap');
module.exports = (sequelize, DataTypes) => {
  class Budget extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Budget.belongsTo(models.WorkOrder, {
        foreignKey:'id',
        targetKey:'work_order'
      })
    }
  }
  Budget.init({
    budget_date: DataTypes.DATE,
    budget_expiration: DataTypes.DATE,
    work_order: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Budget',
  });
  return Budget;
};