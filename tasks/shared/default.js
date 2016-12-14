const 	gulp = require('gulp'),
		concat = require('gulp-concat'),
		flatten = require('gulp-flatten')
		;

gulp.task('shared:html', function(){
	gulp.src('src/shared/**/*.template.html')
	.pipe(flatten())
	.pipe(gulp.dest('dist/cordova/www/templates'));
});

gulp.task('shared:js', function(){
	gulp.src([
		'node_modules/angular/angular.js',
		'src/shared/shared.module.js',
		'src/shared/**/*.directive.js'
	])
	.pipe(concat('shared.js'))
	.pipe(gulp.dest('dist/cordova/www/js'));
});

gulp.task('shared:default', [
	'shared:html',
	'shared:js'
], function(){
	gulp.watch('src/shared/**/*.js', function(){
		gulp.start('shared:js');
	});

	gulp.watch('src/shared/**/*.html', function(){
		gulp.start('shared:html');
	});
});