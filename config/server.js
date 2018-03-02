var express = require('express'); //retorna uma funcao
var consign = require('consign'); //retorna uma funcao

var app = express(); //executa a funcao dentro do express
app.set('view engine', 'ejs');// view engine do node.js
app.set('views', './app/views');//aponta o caminho das views

consign().include('./app/routes').into(app);

module.exports = app;