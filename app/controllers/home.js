module.exports = function() {
	var controller = {};

	controller.index = function(req, res) {
		res.render('index', {nome: 'Reminder'});
	};

	controller.ola = function() {
		console.log('Ola');
	};

	return controller;
}