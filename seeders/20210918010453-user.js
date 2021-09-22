'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users', [{
      username: 'JoeWelder',
      email: 'ibdman@yahoo.com',
      createdAt: new Date(),
      updatedAt: new Date()
    }

  ], 
    
    
    {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {})
  }
};



