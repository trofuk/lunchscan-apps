(function()
{
	require('./tasks/cordova/default.js');

	const gulp = require('gulp');

	gulp.task('default',[
		'cordova:default'
	], function(){
		require('./server/cordova.js');
	});

}).call(this);