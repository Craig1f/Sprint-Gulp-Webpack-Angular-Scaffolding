var gulp = require('gulp');
var gutil = require('gulp-util');
var webpack = require('webpack-stream');

gulp.task("watch", function() {
    gulp.watch(['app/**/*'], ['build']);
});

gulp.task('build', ['default']);

gulp.task('default', function(){
	return gulp.src(['app/app.js'])
		.pipe(webpack(require('./webpack.config.js')))
		.pipe(gulp.dest('../webapp/'));
});

gulp.task('build:prod', function(){   
	var wp = require('webpack');
	var config = require('./webpack.prod.config.js');
	config.plugins.push(new wp.optimize.DedupePlugin())
	config.plugins.push(new wp.optimize.UglifyJsPlugin({
      compress: {warnings: false},
      output: {comments: false},
      sourceMap: true
    }));
    
    return gulp.src(['app/app.js'])
        .pipe(webpack(config))
        .pipe(gulp.dest('../webapp/'));
});