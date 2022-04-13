require('dotenv').config();
const assert = require('assert');

const jsonConfig = require('../../config.json');

describe('Проверка конфигурации env или json', function () {
  it('Параметр NAME_DB_SQL', function () {
    assert(
      process.env.NAME_DB_SQL || jsonConfig.NAME_DB_SQL,
      '\nПараметр NAME_DB_SQL не задан в конфиге. Вам нужно заполнить конфиг .env или config.json файла'
    );
  });

  it('Параметр USER_SQL', function () {
    assert(
      process.env.USER_SQL || jsonConfig.USER_SQL,
      '\nПараметр USER_SQL не задан в конфиге. Вам нужно заполнить конфиг .env или config.json файла'
    );
  });

  it('Параметр PASSWORD_SQL', function () {
    assert(
      process.env.PASSWORD_SQL || jsonConfig.PASSWORD_SQL,
      '\nПараметр PASSWORD_SQL не задан в конфиге. Вам нужно заполнить конфиг .env или config.json файла'
    );
  });

  it('Параметр HOST_SQL', function () {
    assert(
      process.env.HOST_SQL || jsonConfig.HOST_SQL,
      '\nПараметр HOST_SQL не задан в конфиге. Вам нужно заполнить конфиг .env или config.json файла'
    );
  });
});
