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
      customer_contact_name: {
        type: Sequelize.STRING
      },
      customer_contact_lastname: {
        type: Sequelize.STRING
      },
      customer_contact_mail: {
        type: Sequelize.STRING
      },
      customer_contact_phone: {
        type: Sequelize.INTEGER
      },
      customer_contact_area: {
        type: Sequelize.STRING
      },
      customer_contact_rol: {
        type: Sequelize.STRING
      },
      customer: {
        type: Sequelize.INTEGER,
        references: {
          model:'Customer',
          key:'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
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