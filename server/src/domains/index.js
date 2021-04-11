const admin = require('./admin');
const user = require('./user');
const car = require('./car');
const rental = require('./rental');
const payment = require('./payment');
const dashboard = require('./dashboard');

const domains = {
  admin,
  user,
  car,
  rental,
  payment,
  dashboard,
};

module.exports = domains;
