var express = require('express');
var load = require('express-load');
var bodyParser = require('body-parser');
fs = require('fs');

var config = require('./config.json');

// Configuration
try {
    var configJSON = fs.readFileSync(__dirname + "/config.json");
    var config = JSON.parse(configJSON.toString());
} catch(e) {
    console.error("File config.json not found or is invalid: " + e.message);
    process.exit(1);
}

module.exports = function() {

	// config/express
	var app = express();
    var port = process.env.PORT || config.port;
	// configuracao de ambiente
	app.set('port',port);

	//middleware
	app.use(express.static('./public'));
	
	app.use(bodyParser.json()); // to support JSON-encoded bodies
	app.use(bodyParser.urlencoded({ extended: true })); // to support URL-encoded bodies

	app.use(require('method-override')());
	
	app.set('views', './app/views');
	app.set('view engine', 'ejs');	

	load('models', {cwd: 'app'})
	.then('controllers')
	.then('routes')
	.into(app);

	return app;
};
