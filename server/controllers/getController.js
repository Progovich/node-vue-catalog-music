const db = require('../models');
const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');

exports.getAllArtist = catchAsync(async (req, res, next) => {
  db.Artist.findAll({
    raw: true,
    attributes: { exclude: ['createdAt', 'updatedAt'] },
  }).then((data) => {
    res.status(200).send(data);
  });
});

exports.getAllTrack = catchAsync(async (req, res, next) => {
  db.Track.findAll({ raw: true }).then((data) => {
    res.status(200).send(data);
  });
});

exports.getArtist = catchAsync(async (req, res, next) => {
  const artist = req.query;

  if (!artist.id || !Number.isInteger(+artist.id)) {
    return next(new AppError('Некорректный запрос', 400));
  }

  db.Artist.findByPk(artist.id, {
    attributes: { exclude: ['createdAt', 'updatedAt'] },
    raw: true,
  }).then((data) => {
    if (!data) {
      return next(new AppError('Некорректный запрос', 400));
    }
    res.status(200).send(data);
  });
});

exports.getArtistTracks = catchAsync(async (req, res, next) => {
  const artist = req.query;

  if (!artist.id || !Number.isInteger(+artist.id)) {
    return next(new AppError('Некорректный запрос', 400));
  }

  db.Artist.findByPk(artist.id).then(async (artist) => {
    const tracks = await artist.getTracks({
      attributes: { exclude: ['createdAt', 'updatedAt'] },
      raw: true,
    });
    res.status(200).send(tracks);
  });
});

exports.getAllArtistAndTracks = catchAsync(async (req, res, next) => {
  const artists = await db.Artist.findAll({
    raw: true,
    attributes: { exclude: ['createdAt', 'updatedAt'] },
  });

  const tracks = await db.Track.findAll({
    raw: true,
    attributes: [
      [db.Sequelize.col('name'), 'tracks.name'],
      [db.Sequelize.col('id'), 'tracks.id'],
      'artistId',
    ],
  });

  res.status(200).send({ artists, tracks });
});

exports.getFilterTracks = catchAsync(async (req, res, next) => {
  const filter = req.query;

  const Op = db.Sequelize.Op;

  const filterArtistWhere = {
    createdAt: { [Op.gte]: new Date(filter.dateCreatedArtist) },
    name: {
      [Op.iLike]: `%${filter.partNameArtist}%`,
    },
  };

  if (filter.listArtist) {
    filterArtistWhere.id = filter.listArtist;
  }

  // Баг в sequelize. В include не работают limit и offset
  // https://github.com/sequelize/sequelize/issues/7344

  const queryArtist = {
    subQuery: false,
    separate: true,
    where: filterArtistWhere,
    ...(+filter.limitArtist > 0 && { limit: +filter.limitArtist }),
    raw: true,
    ...(+filter.offsetArtist > 0 && { offset: +filter.offsetArtist }),
    attributes: { exclude: ['createdAt', 'updatedAt'] },
  };

  const artists = await db.Artist.findAll(queryArtist);

  const queryTrack = {
    ...(+filter.offsetTracks > 0 && { offset: +filter.offsetTracks }),
    raw: true,
    ...(+filter.limitTracks > 0 && { limit: +filter.limitTracks }),
    where: {
      createdAt: { [Op.gte]: new Date(filter.dateCreatedTrack) },
      name: {
        [Op.iLike]: `%${filter.partNameTrack}%`,
      },
    },
    attributes: [
      [db.Sequelize.col('name'), 'tracks.name'],
      [db.Sequelize.col('id'), 'tracks.id'],
      'artistId',
    ],
  };

  if (filter.listArtist) {
    queryTrack.where.artistId = filter.listArtist;
  }

  const tracks = await db.Track.findAll(queryTrack);

  res.status(200).send({ tracks, artists });
});
