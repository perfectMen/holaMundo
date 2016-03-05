module.exports = function ($) {
	//named Task stylus
	$.gulp.task('stylus', function() {
		return $.gulp.src([
				'./dev/**/*.styl',
				'!./dev/_**/**/**/*.styl'
			])
	    	.pipe($.stylus())
	    	.pipe($.gulp.dest('./deploy/'));
	})
}