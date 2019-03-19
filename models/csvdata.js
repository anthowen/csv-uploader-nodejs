'use strict';
module.exports = function(sequelize, DataTypes) {
  var CsvData = sequelize.define('CsvData', {
    data: DataTypes.STRING,
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return CsvData;
};