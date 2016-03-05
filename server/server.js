module.exports = ($) => {
	//Constantes
	var PORT = 4000
	var PATH = __dirname
	var DIR_HOME = 'deploy/'
	const PORT_RELOAD = 35725	

	var app = $.express()

	app.use($.connect({port: PORT_RELOAD}))
	app.use($.express.static(DIR_HOME)) //ruta path/deploy/index.html
	app.use('/*', function(req, res){
		res.sendFile($.path.resolve(__dirname, `../${DIR_HOME}`))
	})
	app.listen(PORT, function(){
		return console.log('Listening on port %d', PORT)
	})

	// LIVERELOAD
    $.tinylr.listen(PORT_RELOAD, () => console.log('Listening on port %d', PORT_RELOAD))

	//Abrir navegador automaticamente
	$.open('http://localhost:' + PORT)
}




