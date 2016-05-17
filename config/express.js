var express = require('express');
var load = require('express-load');
var bodyParser = require('body-parser');
var config = require('./config.js');

module.exports = function() {

	var app = express();
    var port = config.getPort();

	app.set('port',port);

	app.use(express.static('./public'));
	
	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({ extended: true }));

	app.use(require('method-override')());
	
	app.set('views', './app/views');
	app.set('view engine', 'ejs');	

	load('models', {cwd: 'app'})
	.then('controllers')
	.then('routes')
	.into(app);

	return app;
};
