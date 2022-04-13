module.exports = (err, req, res, next) => {
  switch (err.statusCode) {
    case 400:
      res.error = err.message;
      res.status(err.statusCode).send(err.message);
      break;

    case 406:
      res.error = err.message;
      res.status(err.statusCode).send(err.message);
      break;

    case 404:
      res.error = err.message;
      res.status(err.statusCode).send(err.message);
      break;

    default:
      console.error(err);
      res.status(500).send('Неизвестный сбой');
      break;
  }
  next();
};
