module.exports = function ($) {
	//server 
	$.gulp.task('server', function () {
		require('./../server/server')($) //Running server
	}); 
}