'use strict';
module.exports = (sequelize, DataTypes) => {
  const Notebook = sequelize.define('Notebook', {
    userId: DataTypes.INTEGER,
    name: DataTypes.STRING
  }, {});
  Notebook.associate = function(models) {
    // associations can be defined here
  };
  return Notebook;
};