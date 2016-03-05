module.exports = function ($) {
	$.gulp.task('watch', function() {
		$.gulp.watch('./dev/**/*.js', ['scripts'])
		$.gulp.watch('./dev/**/*.jade', ['jade'])
		$.gulp.watch('./dev/**/*.styl', ['stylus'])

		return $.gulp.watch(['./deploy/**/*'], (event) => {
            const FILE_NAME = $.path.relative(__dirname, event.path)

            $.tinylr.changed({
                body: {
                    files: [FILE_NAME]
                }
            })
        })
	})
}