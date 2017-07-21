var express = require('express'); //retorna uma funcao
var app = express(); //executa a funcao dentro do express

app.set('view engine', 'ejs');

app.get('/tecnologia', function(req, res){
	res.render("secao/tecnologia");
});

app.get('/', function(req, res){
	res.send("<html><body>Portal de Noticias</body></html>")
});

app.listen(3000, function(){

	console.log("Servidor rodando com Express");

});