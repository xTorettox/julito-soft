'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('SpareParts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      partDescription: {
        type: Sequelize.STRING
      },
      partNumber: {
        type: Sequelize.STRING
      },
      partLocation: {
        type: Sequelize.STRING
      },
      partPrice: {
        type: Sequelize.FLOAT
      },
      partStock: {
        type: Sequelize.INTEGER
      },
      workOrder: {
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
    await queryInterface.dropTable('SpareParts');
  }
};