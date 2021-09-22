'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Jobs', [{
      job_number: '15677',
    purchase_order: '555555',
    name: 'Bruce Power',
    userId: 1,
    createdAt: new Date(),
    updatedAt: new Date()
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Jobs', null, {});
  }
};
