var dbConnection = require('../../config/dbConnection');

module.exports = function(app){
	
	app.get('/noticias', function(req, res){

		var connection = dbConnection();

		connection.query("SELECT * FROM teste_noticias", function(error, result){
			res.render("noticias/noticias", {dados : result});
			//res.render(result);
			//console.log(result);
		});
		
	});
};