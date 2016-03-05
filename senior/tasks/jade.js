module.exports = function ($) {
	//named Task stylus
	//named Task Jade
	$.gulp.task('jade', function() {
	
	  	$.gulp.src([
	  		'./dev/**/**/*.jade',
	  		'!./dev/_**/**/**/*.jade'
	  	])
	  	.pipe($.data(function(file) {
	  		//1a forma return require('/home/abelmejia/documentos/node/build-system-gulp/frontend-workflow/8.gulp-data/dev/index.js') 

			//Segunda forma return require($.path.resolve(__dirname, $.path.dirname(file.path), '_'+$.path.basename(file.path, '.jade')+ '.js'))
	  		
	  		//Tercera forma
	  		/*var FILE =  $.path.basename(file.path, '.jade')

	  		var DIRFILE = $.path.dirname(file.path)

	  		var ROUTE = $.path.resolve(__dirname, DIRFILE, `_${FILE}.js`)

	  		return require(ROUTE)*/

	  		

	  		// Cuarta forma Function
	  		return $.f.dataJade(file)

	    }))
	    .pipe($.jade({
	      pretty: true
	    }))
	    .pipe($.gulp.dest('./deploy/'))	
	})

}