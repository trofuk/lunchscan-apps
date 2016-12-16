const 	gulp = require('gulp'),
		concat = require('gulp-concat'),
		sass = require('gulp-sass');
		bootstrapSass = {in: './node_modules/bootstrap-sass/'};
    	fonts = {in: ['src/cordova/fonts/*.*', bootstrapSass.in + 'assets/fonts/**/*'],
        	out:'dist/cordova/www/fonts/'};

        scss = {
		    in: 'src/cordova/sass/main.scss',
		    out: 'dist/cordova/www/styles',
		    watch: 'src/cordova/sass/**/*',
		    sassOpts: {
		    outputStyle: 'nested',
		    precison: 3,
		    errLogToConsole: true,
		    includePaths: [bootstrapSass.in + 'assets/stylesheets']
		    }
		};
		

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

gulp.task('cordova:fonts', function () {
    return gulp
        .src(fonts.in)
        .pipe(gulp.dest(fonts.out));
});


gulp.task('cordova:sass', ['cordova:fonts'], function(){
  gulp.src('src/cordova/sass/**/*.scss')
    .pipe(sass(scss.sassOpts))
    // .pipe(concat('body.css'))
    .pipe(gulp.dest('dist/cordova/www/styles'));
});


gulp.task('cordova:js', function(){
	gulp.src([
		// 'node_modules/angular/angular.js',
		'node_modules/angular-ui-router/release/angular-ui-router.js',
		'src/cordova/app.module.js'
	])
	.pipe(concat('app.js'))
	.pipe(gulp.dest('dist/cordova/www/js'));
});

gulp.task('cordova:default', [
	'cordova:copy-ionic-config',
	'cordova:html',
	'cordova:fonts',
	'cordova:sass',
	'cordova:js'
], function(){
	gulp.watch('src/cordova/**/*.js', function(){
		gulp.start('cordova:js');
	});

	gulp.watch('src/cordova/**/*.html', function(){
		gulp.start('cordova:html');
	});

	gulp.watch('src/cordova/sass/**/*.scss', function(){
		gulp.start('cordova:sass');
	});


});
