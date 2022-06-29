'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Customer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Customer.hasMany(models.CustomerContact, {
        foreignKey: 'customer'
      })
      Customer.hasMany(models.Fleet, {
        foreignKey: 'customer'
      })
    }
  }
  Customer.init({
    customer_name: DataTypes.STRING,
    customer_cuit: DataTypes.INTEGER,
    customer_phone: DataTypes.INTEGER,
    customer_mail: DataTypes.STRING,
    customer_address: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Customer',
  });
  return Customer;
};