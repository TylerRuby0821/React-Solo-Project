'use strict';
module.exports = (sequelize, DataTypes) => {
  const NoteTag = sequelize.define('NoteTags', {
    noteId: DataTypes.INTEGER,
    tagId: DataTypes.INTEGER
  }, {});
  NoteTag.associate = function(models) {
    // associations can be defined here
    NoteTag.belongsTo(models.Note, {foreignKey: "noteId"})
    NoteTag.belongsTo(models.Tag, {foreignKey: "tagId"})
  };
  return NoteTag;
};
