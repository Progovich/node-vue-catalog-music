const Sequelize = require('sequelize');

const ArtistModel = require('./artistModel');
const TrackModel = require('./trackModel');
const jsonConfig = require('../../config.json');

const checkingJSONconfig = [
  jsonConfig.NAME_DB_SQL,
  jsonConfig.USER_SQL,
  jsonConfig.PASSWORD_SQL,
  jsonConfig.HOST_SQL,
];

if (checkingJSONconfig.every((e) => e)) {
  process.env.NAME_DB_SQL = jsonConfig.NAME_DB_SQL;
  process.env.USER_SQL = jsonConfig.USER_SQL;
  process.env.PASSWORD_SQL = jsonConfig.PASSWORD_SQL;
  process.env.HOST_SQL = jsonConfig.HOST_SQL;
}

const db = {};
const nameSql = process.env.NAME_DB_SQL;
const userSql = process.env.USER_SQL;
const passwordSql = process.env.PASSWORD_SQL;
const hostSql = process.env.HOST_SQL;

const sequelize = new Sequelize(nameSql, userSql, passwordSql, {
  dialect: 'postgres',
  host: hostSql,
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.Artist = ArtistModel(sequelize, Sequelize);
db.Track = TrackModel(sequelize, Sequelize);

db.Artist.hasMany(db.Track, { onDelete: 'cascade', hooks: true });
db.Track.belongsTo(db.Artist);

module.exports = db;
