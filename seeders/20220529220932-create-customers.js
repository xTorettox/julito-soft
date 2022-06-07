'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {

    let customers = [
      { mail: 'compras@weatherford.com', }
    ]

    await queryInterface.bulkInsert('People', [{
      name: 'John Doe',
      isBetaMember: false
    }], {});

  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('People', null, {});
  }
};
