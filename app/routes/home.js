module.exports = function(app) {

  	var homeController = app.controllers.home;

  	app.route('/')
  	  .get(homeController.index);
  	  //.post(contatoController.salvaContato);

  	// app.route('/contatos/:id')
  	//   .get(contatoController.obtemContato)
  	//   .delete(contatoController.removeContato);

  	return app;

}