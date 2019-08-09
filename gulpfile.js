'use strict';

var gulp = require('gulp');
var panini = require('panini');
var sass = require('gulp-sass');
var uglifycss = require('gulp-uglifycss');
var path = require('path');
var webpack = require('webpack');

sass.compiler = require('node-sass');

function site(){
	return gulp.src('src/pages/**/*.html')
	.pipe(panini({
		root: 'src/pages/',
		layouts: 'src/layouts/',
		partials: 'src/partials/',
		helpers: 'src/helpers/',
		data: 'src/data/'
	}))
	.pipe(gulp.dest('dist'));
}

function css(){
 return gulp.src('src/sass/**/*.scss')
	.pipe(sass().on('error', sass.logError))
	.pipe(uglifycss({
		"maxLineLen": 80,
		"uglyComments": true
	}))
	.pipe(gulp.dest('dist/css'));
}

// webpack stuff
const webpackConfig = {
	entry: './src/js/main.js',
	output: {
		path: path.resolve(__dirname, 'dist/js'),
		filename: 'main.js'
	}
};

function js(){
	return new Promise((resolve, reject) => {
		webpack(webpackConfig, (err, stats) => {
			if (err){
				return reject(err);
			}
			if (stats.hasErrors()){
				return reject(new Error(stats.compilation.errors.join('\n')));
			}
			resolve();
		});
	});
}

function images(){
	return gulp.src('src/images/**/*.{gif,jpg,png,svg}')
	.pipe(gulp.dest('dist/images'));
}

function videos(){
	return gulp.src('src/videos/**/*.{mp4,mpeg,flv,ogg}')
	.pipe(gulp.dest('dist/videos'));
}

function fonts(){
	return gulp.src('src/fonts/*')
	.pipe(gulp.dest('dist/fonts'));
}

exports.css = css;
exports.js = js;
exports.site = site;
exports.fonts = fonts;
exports.images = images;
exports.videos = videos;
exports.default = gulp.series(site, css, js, fonts, images, videos);
