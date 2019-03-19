'use strict';
const populateWithRandom = require('./populateWithRandom');

module.exports = {
  up: function (queryInterface, Sequelize) {
    
    return queryInterface.bulkInsert('CsvUserRows', [{
      first_name: 'John',
      last_name: 'Doe',
      email : 'johndoe@mail.com',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
    
  },

  down: function (queryInterface, Sequelize) {
    
    return queryInterface.bulkDelete('CsvUserRow', null, {});
    
  }
};
