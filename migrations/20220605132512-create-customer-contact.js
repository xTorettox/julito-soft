'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('CustomerContacts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      contactName: {
        type: Sequelize.STRING
      },
      contactLastname: {
        type: Sequelize.STRING
      },
      contactMail: {
        type: Sequelize.STRING
      },
      contactPhone: {
        type: Sequelize.STRING
      },
      contactArea: {
        type: Sequelize.STRING
      },
      contactRol: {
        type: Sequelize.STRING
      },
      customer: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('CustomerContacts');
  }
};