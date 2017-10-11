var gulp = require('gulp'),
	$ = require('gulp-load-plugins')(),
	concat = require('gulp-concat'),
	uglify = require('gulp-uglify'),
	sourcemaps = require('gulp-sourcemaps'),
	browserSync = require('browser-sync'),
	reload = browserSync.reload,
	jade = require('gulp-jade'),
	imagemin = require('gulp-imagemin');


var paths = {
	imgSrc: "../images/src/",
	/*jsSrc: "../js/src/",
	jsDest: "../js/",*/
	mapsDest: "../maps/",
	imgDest: "../images/"
};

gulp.task('minImg', function() {
	gulp.src(paths.imgSrc + '*')
		.pipe(imagemin())
		.pipe(gulp.dest(paths.imgDest))
});

gulp.task('scripts', function() {
	return gulp.src([ '../js/src/*.js'])
		.pipe(sourcemaps.init())
		.pipe(concat('scripts.min.js'))
		.pipe(uglify())
		.pipe(sourcemaps.write('../maps'))
		.pipe(gulp.dest('../js'));
});

gulp.task('browser-sync', ['watchBase'], function () {
	browserSync({
		notify: false,
		port: 9002,
		startPath:'index.html',
		reloadDelay: 1000,
		server: {
			baseDir: '../'
		}
	});
});
 
gulp.task('templates', function() { 
	gulp.src('../templates/*.jade')
		.pipe(jade())
		.pipe(gulp.dest('../'))
});


gulp.task('default', ['browser-sync'], function () {
	gulp.watch('../js/src/*.js', ['scripts']).on('change', reload);
	gulp.watch('../templates/*.jade', ['templates']).on('change', reload);
});

gulp.task('watchBase', function () {
	gulp.watch('../js/src/*.js', ['scripts']).on('change', reload);
	gulp.watch('../templates/*.jade', ['templates']).on('change', reload);
});