'use strict';

module.exports = {
  up(queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.addColumn(
        'Jobs', // table name
        'estimate', // new field name
        {
          type: Sequelize.STRING,
          allowNull: false,
        },
      ),
      queryInterface.addColumn(
        'Jobs',
        'expected_complete',
        {
          type: Sequelize.STRING,
          allowNull: false,
        }
      )
    ]);
  },

  down(queryInterface, Sequelize) {
    // logic for reverting the changes
    return Promise.all([
      queryInterface.removeColumn('Jobs', 'estimate'),
      queryInterface.removeColumn('Jobs', 'expected_complete')
    
    ]);
  },
};
