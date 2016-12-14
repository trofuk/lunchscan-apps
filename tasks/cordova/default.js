const gulp = require('gulp');

gulp.task('cordova:copy-ionic-config', function(){
	gulp.src([
		'src/cordova/.io-config.json',
		'src/cordova/ionic.config.json',
	])
	.pipe(gulp.dest('dist/cordova'))
});

gulp.task('cordova:html', function(){
	gulp.src([
		'src/cordova/index.html',
	])
	.pipe(gulp.dest('dist/cordova/www'))
});

gulp.task('cordova:default',
[
	'cordova:copy-ionic-config',
	'cordova:html'
]);