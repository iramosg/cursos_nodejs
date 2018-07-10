//var dbConnection = require('../../config/dbConnection');

module.exports = function(app){
	
	//var connection = app.dbConnection();

	app.get('/noticias', function(req, res){		

		var connection = app.config.dbConnection;

		console.log(connection);

		// connection.query("SELECT * FROM teste_noticias", function(error, result){
		// 	res.render("noticias/noticias", {dados : result});
		// });
		
	});
};