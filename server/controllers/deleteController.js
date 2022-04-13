const db = require('../models');
const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');

exports.deleteArtist = catchAsync(async (req, res, next) => {
  const artist = req.body;

  if (!artist.id || !Number.isInteger(+artist.id)) {
    return next(new AppError('Некорректный запрос', 400));
  }

  await db.Artist.destroy({ where: { id: artist.id } });
  res.status(201).end();
});

exports.deleteTrack = catchAsync(async (req, res, next) => {
  const track = req.body;

  if (!track.id || !Number.isInteger(+track.id)) {
    return next(new AppError('Некорректный запрос', 400));
  }

  await db.Track.destroy({ where: { id: track.id } });
  res.status(201).end();
});
