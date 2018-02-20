var express = require('express'); //retorna uma funcao
var app = express(); //executa a funcao dentro do express
app.set('view engine', 'ejs');// view engine do node.js
app.set('views', './app/views');//aponta o caminho das views

module.exports = app;