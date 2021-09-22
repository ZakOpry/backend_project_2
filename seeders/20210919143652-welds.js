'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Welds', [{
      weldId: "J0001",
      partNumber1: "PLT003",
      partNumber2: "PLT004",
      jobId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
  {
    weldId: "J0002",
    partNumber1: "PLT004",
    partNumber2: "PLT005",
    jobId: 1,
    createdAt: new Date(),
    updatedAt: new Date()
  },
{
  weldId: "J0001",
  partNumber1: "TBS001",
  partNumber2: "TBS002",
  jobId: 2,
  createdAt: new Date(),
  updatedAt: new Date()
}])
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Welds', null, {})
  }
};
