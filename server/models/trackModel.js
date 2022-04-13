module.exports = (sequelize, Sequelize) => {
  const Track = sequelize.define('track', {
    name: { type: Sequelize.TEXT },
  });
  return Track;
};
