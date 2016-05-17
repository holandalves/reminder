var sequelize = require('sequelize');
var config = require('./config.json');

exports.get = function (argument) {

	var host = process.env.host || config.db.host,
	    database = process.env.database || config.db.database,
		username = process.env.username || config.db.username,
		password = process.env.password || config.db.password,
		db = new sequelize(database, username, password, {
			host: host,
			dialect: 'mysql',
			pool: {
				max: 5,
				min: 0,
				idle: 10000
			}
		});

	return db;
}
