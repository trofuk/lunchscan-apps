(function()
{
	require('./tasks/cordova/default.js');
	require('./tasks/shared/default.js');

	const gulp = require('gulp');

	gulp.task('default',[
		'shared:default',
		'cordova:default'
	], function(){
		require('./server/cordova.js');
	});

}).call(this);