'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('WorkOrders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      orderDate: {
        type: Sequelize.DATE
      },
      orderKilometers: {
        type: Sequelize.INTEGER
      },
      fuelLevel: {
        type: Sequelize.STRING
      },
      preOrderComments: {
        type: Sequelize.STRING
      },
      postOrderComments: {
        type: Sequelize.STRING
      },
      nextServiceRecommendations: {
        type: Sequelize.STRING
      },
      orderAmount: {
        type: Sequelize.FLOAT
      },
      orderOpen: {
        type: Sequelize.BOOLEAN
      },
      nextVisit: {
        type: Sequelize.DATE
      },
      vehicle: {
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
    await queryInterface.dropTable('WorkOrders');
  }
};