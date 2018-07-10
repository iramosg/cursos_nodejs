var mysql = require('mysql');

module.exports = function(){
	return mysql.createConnection({
		host : 'jay.com.br',
		user : 'jay',
		password : 'hugo28',
		database : 'jay_wpteste'
	});
}