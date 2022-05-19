'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Customers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      customer_name: {
        type: Sequelize.STRING
      },
      customer_cuit: {
        type: Sequelize.INTEGER
      },
      customer_phone: {
        type: Sequelize.INTEGER
      },
      customer_mail: {
        type: Sequelize.STRING
      },
      customer_address: {
        type: Sequelize.STRING
      },
      customer_collection: {
        type: Sequelize.INTEGER,
        references: {
          model:'CustomerContact',
          key:'id'
        },
        onDelete:'CASCADE',
        onUpdate:'CASCADE'
      },
      fleet_collection: {
        type: Sequelize.INTEGER,
        references: {
          model:'CustomerContact',
          key:'id'
        },
        onDelete:'CASCADE',
        onUpdate:'CASCADE'
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
    await queryInterface.dropTable('Customers');
  }
};