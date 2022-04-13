const db = require('../models');
const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');

exports.editArtist = catchAsync(async (req, res, next) => {
  const artist = req.body.data;

  if (!artist.newName || !artist.id || !Number.isInteger(+artist.id)) {
    return next(new AppError('Некорректный запрос', 400));
  }


  db.Artist.update({ name: artist.newName }, { where: { id: artist.id } });
  res.status(201).end();
});

exports.editTrack = catchAsync(async (req, res, next) => {
  const track = req.body.data;

  if (!track.newName || !track.id || !Number.isInteger(+track.id)) {
    return next(new AppError('Некорректный запрос', 400));
  }

  db.Track.update({ name: track.newName }, { where: { id: track.id } });
  res.status(201).end();
});
