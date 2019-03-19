'use strict';
const populateWithRandom = require('./populateWithRandom');

module.exports = {
  up: function (queryInterface, Sequelize) {
    
    return queryInterface.bulkInsert('CsvData', [{
      data: '{"Company Name":"C1", "01/01/2019":"48"}',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
    
  },

  down: function (queryInterface, Sequelize) {
    
    return queryInterface.bulkDelete('CsvData', null, {});
    
  }
};
