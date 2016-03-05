const dev = 'dev'

var $ = {
	babel: require('gulp-babel'),
	concat: require('gulp-concat'),
	data: require('gulp-data'),
	express: require('express'),
	extend: require('extend'),
	fs: require('fs'),
	gulp: require('gulp'),
	jade: require('gulp-jade'),
	open: require('open'),
	path: require('path'),
	runSequence: require('run-sequence'),
	stylus: require('gulp-stylus'),
	uglify: require('gulp-uglify'),
	connect: require('connect-livereload'),
	tinylr: require('tiny-lr')(),
	del: require('del'),

	server: './server',
	ftask: './tasks'

}

$.f = {
	dataJade: function(file) {
		const FILE =  $.path.basename(file.path, '.jade')

  		const DIRFILE = $.path.dirname(file.path)

  		const ROUTE = $.path.resolve(__dirname, DIRFILE, `_${FILE}.js`)
  		const ROUTEGLOBAL = $.path.resolve(__dirname, './dev/_global.js')


  		delete require.cache[ROUTE]
  		delete require.cache[ROUTEGLOBAL]

  		const dataJSon = {}
  		const dataJsonFile = ($.fs.existsSync(ROUTE)) ? require(ROUTE) : {}
        const dataJsonGlobal = ($.fs.existsSync(ROUTEGLOBAL)) ? require(ROUTEGLOBAL) : {}


        $.extend(true, dataJSon, dataJsonGlobal)
        $.extend(true, dataJSon, dataJsonFile)

  		return dataJSon

	},

	readFF: function(folder) {
		var PATH = $.path.join(__dirname, folder)

		var FILES = $.fs.readdirSync(PATH)

		FILES.forEach(function(file){
			return require(`${$.ftask}/${file}`)($)
		})

	}
}

module.exports = $