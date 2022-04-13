const db = require('../models');
const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');
const wordFilter = require('../utils/wordFilter');

exports.createArtist = catchAsync(async (req, res, next) => {
  const artist = req.body.data;

  if (!artist.name) {
    return next(new AppError('Некорректный запрос', 400));
  }

  const wordIsAllowed = await wordFilter(artist.name);

  if (wordIsAllowed) {
    return next(new AppError('Запрещённый исполнитель', 406));
  }

  db.Artist.create({ name: artist.name }).then((doc) => {
    res.status(201).send({ id: doc.id, name: doc.name });
  });
});

exports.createTrack = catchAsync(async (req, res, next) => {
  const track = req.body.data;

  if (!track.artistID || !Number.isInteger(+track.artistID) || !track.name) {
    return next(new AppError('Некорректный запрос', 400));
  }

  const artist = await db.Artist.findByPk(track.artistID);

  if (!artist) {
    return next(new AppError('Некорректный запрос', 400));
  }

  artist.createTrack({ name: track.name });
  res.status(201).end();
});
