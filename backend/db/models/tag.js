'use strict';
module.exports = (sequelize, DataTypes) => {
  const Tag = sequelize.define('Tag', {
    userId: DataTypes.INTEGER,
    tagName: DataTypes.STRING
  }, {});
  Tag.associate = function(models) {
    // associations can be defined here
    Tag.belongsToMany(models.Note, {through:"NoteTags" ,foreignKey: "noteId"})
    Tag.belongsTo(models.User, {foreignKey: "userId"})
  };
  return Tag;
};
