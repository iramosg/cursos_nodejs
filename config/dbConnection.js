var mysql = require('mysql');
var connMysql = function(){
	mysql.createConnection({
		host : 'jay.com.br',
		user : 'jay',
		password : 'hugo28',
		database : 'jay_wpteste'
	});
};
module.exports = function(){
	return connMysql;
}