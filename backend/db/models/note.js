'use strict';
module.exports = (sequelize, DataTypes) => {
  const Note = sequelize.define('Note', {
    notebookId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    title: DataTypes.STRING,
    noteContent: DataTypes.TEXT
  }, {});
  Note.associate = function(models) {
    Note.belongsTo(models.Notebook, { foreignKey: 'notebookId' })
    Note.belongsToMany(models.Tag, {through:"NoteTags" ,foreignKey: "tagId"})
  };
  return Note;
};
