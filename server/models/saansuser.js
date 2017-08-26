'use strict';

var app = require('../server.js')

module.exports = function(Saansuser) {

//console.log(app);
	//Saansuser.find({'where': {'userid': 4}}, function (err, res){  console.log(err, res) });

	Saansuser.app.dataSources.postDB.find({'where': {'userid': 4}}, function (err, res){  console.log(err, res) });


};
