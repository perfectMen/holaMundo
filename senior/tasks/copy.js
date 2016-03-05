module.exports = function ($) {
	const copy = function (dev, deploy) {
		return $.gulp.src(`${dev}`)
	    	.pipe($.gulp.dest(`${deploy}`))
	}

	$.gulp.task('script-vendor', function() {
		copy('./dev/_vendor/**/*.js', './deploy/vendor/')
		copy('./dev/_vendor/**/*.css', './deploy/vendor/')
		copy('./dev/_vendor/**/*', './deploy/vendor/') //copia todas las demas extensiones
		copy('./dev/img/**/*', './deploy/img/')
	})
}