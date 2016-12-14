(function()
{
	require('./tasks/cordova/default.js');
	// require('./resources/app/gulp-tasks/frontend/account.js');
	// require('./resources/app/gulp-tasks/frontend/search.js');
	// require('./resources/app/gulp-tasks/plugins.js');
	// require('./resources/app/gulp-tasks/backend.js');

	const gulp = require('gulp');

	gulp.task('default',
	[
		'cordova:default'
	]);

}).call(this);
