module.exports = function ($) {
	//named Task scripts
	$.gulp.task('scripts', ['script-vendor'], function() {

		return $.gulp.src([
				'./dev/**/*.js',
				'!./dev/_**/**/*.js'
			]) 
			.pipe($.babel({
				presets: ['es2015']
			}))
			//.pipe($.concat('all.js'))
			//.pipe($.uglify())
			//.pipe($.gulp.dest('./deploy/js/'));	
			.pipe($.gulp.dest('./deploy/'));	
	})
}