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
      serviceId: {
        type: Sequelize.INTEGER
      },
      serviceItemId: {
        type: Sequelize.INTEGER
      },
      serviceItemDescription: {
        type: Sequelize.STRING
      },
      serviceItemSolution: {
        type: Sequelize.STRING
      },
      serviceItemApproved: {
        type: Sequelize.BOOLEAN
      },
      serviceItemSolved: {
        type: Sequelize.BOOLEAN
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