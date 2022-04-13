const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const history = require('connect-history-api-fallback');

const AppError = require('./utils/appError');
const globalErrorHandler = require('./controllers/errorController');
const artistRoutes = require('./routes/artistRoute');
const trackRoutes = require('./routes/trackRoute');

const app = express();

app.use(history());

// Development logging
if (process.env.NODE_ENV === 'development') {
  morgan.token('errorMessage', function (req, res) {
    return res.error;
  });
  app.use(
    morgan(
      ':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :errorMessage :res[content-length] ":referrer" ":user-agent" '
    )
  );
  app.use(cors());
}

app.use(express.json({ limit: '10kb' }));
app.use(express.urlencoded({ extended: true, limit: '10kb' }));

const path = __dirname.replace(/\\server/, '');
app.use(express.static(path + '\\dist\\'));

// ROUTES
app.get('/', (req, res) => {
  res.sendFile(path + '\\dist\\index.html');
});

app.use('/api/artist', artistRoutes);
app.use('/api/track', trackRoutes);

app.all('*', (req, res, next) => {
  next(new AppError(`Not Found ${req.originalUrl}`, 404));
});


app.use(globalErrorHandler);

module.exports = app;
