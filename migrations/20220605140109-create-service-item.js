'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('ServiceItems', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      itemDescription: {
        type: Sequelize.STRING
      },
      itemSolution: {
        type: Sequelize.STRING
      },
      itemApproved: {
        type: Sequelize.BOOLEAN
      },
      itemSolved: {
        type: Sequelize.BOOLEAN
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
    await queryInterface.dropTable('ServiceItems');
  }
};