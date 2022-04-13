require('dotenv').config();

const db = require('./models');
const app = require('./app');

const port = process.env.CATALOG_PORT || 5000;

db.sequelize.sync({ force: false }).then(() => {
  console.log('Успeшная синхронизация');
  app.listen(port, () => {
    console.log(`App running on port ${port}...`);
  });
});
