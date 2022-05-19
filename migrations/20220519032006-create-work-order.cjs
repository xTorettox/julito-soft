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
      vehicle_id: {
        type: Sequelize.INTEGER
      },
      order_date: {
        type: Sequelize.DATE
      },
      order_km: {
        type: Sequelize.INTEGER
      },
      fuel_level: {
        type: Sequelize.STRING
      },
      pre_order_comments: {
        type: Sequelize.STRING
      },
      post_order_comments: {
        type: Sequelize.STRING
      },
      next_service_recommendations: {
        type: Sequelize.STRING
      },
      service_item_collection: {
        type: Sequelize.INTEGER,
        references: {
          model:'ServiceItem',
          key:'id'
        },
        onDelete:'CASCADE',
        onUpdate:'CASCADE'
      },
      spare_parts_collection: {
        type: Sequelize.INTEGER,
        references: {
          model:'SparePart',
          key:'id'
        },
        onDelete:'CASCADE',
        onUpdate:'CASCADE'
      },
      job__collection: {
        type: Sequelize.INTEGER,
        references: {
          model:'Jobs',
          key:'id'
        },
        onDelete:'CASCADE',
        onUpdate:'CASCADE'
      },
      order_amount: {
        type: Sequelize.FLOAT
      },
      order_open: {
        type: Sequelize.BOOLEAN
      },
      next_visit: {
        type: Sequelize.STRING
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