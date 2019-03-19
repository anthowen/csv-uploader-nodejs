'use strict';
module.exports = function(sequelize, DataTypes) {
  var CsvUserRow = sequelize.define('CsvUserRow', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return CsvUserRow;
};