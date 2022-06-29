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
      service_item_description: {
        type: Sequelize.STRING
      },
      service_item_solution: {
        type: Sequelize.STRING
      },
      service_item_approved: {
        type: Sequelize.BOOLEAN
      },
      service_item_solved: {
        type: Sequelize.BOOLEAN
      },
      work_order: {
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