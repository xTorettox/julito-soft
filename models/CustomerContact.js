'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CustomerContact extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  CustomerContact.init({
    contactName: DataTypes.STRING,
    contactLastname: DataTypes.STRING,
    contactMail: DataTypes.STRING,
    contactPhone: DataTypes.STRING,
    contactArea: DataTypes.STRING,
    contactRol: DataTypes.STRING,
    customer: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'CustomerContact',
  });
  return CustomerContact;
};