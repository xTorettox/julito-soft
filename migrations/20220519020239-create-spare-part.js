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
      part_description: {
        type: Sequelize.STRING
      },
      part_number: {
        type: Sequelize.STRING
      },
      part_location: {
        type: Sequelize.STRING
      },
      part_price: {
        type: Sequelize.FLOAT
      },
      part_stock: {
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