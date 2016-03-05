module.exports = function ($) {

	$.gulp.task('default', function(callback) {
	  	$.runSequence('clean:deploy', 'scripts',
	              ['stylus', 'jade','watch','server'],
	              callback);
	}); 
}
