'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {

    return Promise.all([
      queryInterface.addColumn(
        'customer_picture',
        {
          type: Sequelize.STRING,
          allowNull: true,
        },
      )
    ]);
  },

  async down(queryInterface, Sequelize) {
  /**
   * Add reverting commands here.
   *
   * Example:
   * await queryInterface.dropTable('users');
   */
}
};
