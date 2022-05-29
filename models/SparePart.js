'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SparePart extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      SparePart.belongsTo(models.WorkOrder, {
        foreignKey:'id',
        targetKey:'work_order'
      })
    }
  }
  SparePart.init({
    part_description: DataTypes.STRING,
    part_number: DataTypes.STRING,
    part_location: DataTypes.STRING,
    part_price: DataTypes.FLOAT,
    part_stock: DataTypes.INTEGER,
    work_order: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'SparePart',
  });
  return SparePart;
};