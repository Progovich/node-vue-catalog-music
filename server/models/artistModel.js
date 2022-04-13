module.exports = (sequelize, Sequelize) => {
  const Artist = sequelize.define('artist', {
    name: { type: Sequelize.TEXT },
  });
  return Artist;
};
