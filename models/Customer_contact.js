'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Customer_contact extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Customer_contact.init({
    customer_contact_name: DataTypes.STRING,
    customer_contact_mail: DataTypes.STRING,
    customer_contact_phone: DataTypes.INTEGER,
    customer_contact_area: DataTypes.STRING,
    customer_contact_rol: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Customer_contact',
  });
  return Customer_contact;
};