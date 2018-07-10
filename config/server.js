var express = require('express'); //retorna uma funcao
var consign = require('consign'); //retorna uma funcao

var app = express(); //executa a funcao dentro do express
app.set('view engine', 'ejs');// view engine do node.js
app.set('views', './app/views');//aponta o caminho das views padrão

//tem que ser feito depois do express pois eu preciso inserir o load do consign para dentro do express
consign().include('./app/routes').into(app); //inclui todos os arquivos de rota  automaticamente

module.exports = app;