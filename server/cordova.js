const express = require('express');
const app = express();
const opener = require('opener');

app.use(express.static(__dirname + '/../dist/cordova/www'));

app.get('/*', function(req, res) {
	var options = {
		root: __dirname + '/../dist/cordova/www'
	};
	res.sendFile('index.html', options, function(err){
		if(err){
			console.log(err);
			res.status(err.status).end();
		}
	});
});

app.listen(3000, function () {
	console.log('Web server started at: http://localhost:3000');
	opener('http://localhost:3000');
});