const 	gulp = require('gulp'),
		concat = require('gulp-concat')
		;

gulp.task('cordova:copy-ionic-config', function(){
	gulp.src([
		'src/cordova/.io-config.json',
		'src/cordova/ionic.config.json',
	])
	.pipe(gulp.dest('dist/cordova'))
});

gulp.task('cordova:html', function(){
	gulp.src('src/cordova/index.html')
	.pipe(gulp.dest('dist/cordova/www'));

	gulp.src('src/cordova/**/*.template.html')
	.pipe(gulp.dest('dist/cordova/www/templates'));
});

gulp.task('cordova:js', function(){
	gulp.src([
		'node_modules/angular/angular.js',
		'node_modules/angular-ui-router/release/angular-ui-router.js',
		'src/cordova/app.module.js'
	])
	.pipe(concat('app.js'))
	.pipe(gulp.dest('dist/cordova/www/js'))
});

gulp.task('cordova:default', [
	'cordova:copy-ionic-config',
	'cordova:html',
	'cordova:js'
], function(){
	gulp.watch('src/cordova/**/*.js', function(){
		gulp.start('cordova:js');
	});

	gulp.watch('src/cordova/**/*.html', function(){
		gulp.start('cordova:html');
	});
});