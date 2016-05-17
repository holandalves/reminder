var database = require('../../config/database.js');
var Sequelize = require('sequelize');

var db = database.get();
var User = db.define('user', {

  firstname: Sequelize.STRING,
  email: Sequelize.TEXT,
  password: Sequelize.TEXT,
  date: Sequelize.DATE
});