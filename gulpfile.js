'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var cleanCSS = require('gulp-clean-css');
var rename = require("gulp-rename");
var cssbeautify = require('gulp-cssbeautify');

gulp.task('build', function() {
	gulp.src('./sass/material-colors.sass')
		.pipe(sass().on('error', sass.logError))
    .pipe(cssbeautify())
		.pipe(gulp.dest('./css'));
	gulp.src('./sass/material-colors.sass')
		.pipe(sass().on('error', sass.logError))
		.pipe(cleanCSS())
    .pipe(rename("material-colors.min.css"))
		.pipe(gulp.dest('./css'));
});

gulp.task('watch', function() {
	gulp.watch('./sass/**/*.sass', ['build']);
});
